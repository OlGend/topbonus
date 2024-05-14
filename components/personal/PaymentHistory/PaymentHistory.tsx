import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { visuallyHidden } from "@mui/utils";
import dayjs from "dayjs";
import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

type PaymentHistory = {
  USD: string;
  paymentAddress: string;
  paymentMethod: string;
  paymentSumIn: string;
  status: string;
  timestamp: string;
};

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

type HeadCell = {
  disablePadding: boolean;
  id: keyof PaymentHistory;
  label: string;
  numeric: boolean;
};
const headCells: readonly HeadCell[] = [
  {
    id: "paymentMethod",
    numeric: false,
    disablePadding: true,
    label: "Method",
  },
  {
    id: "paymentSumIn",
    numeric: false,
    disablePadding: false,
    label: "Amount",
  },
  {
    id: "paymentAddress",
    numeric: false,
    disablePadding: false,
    label: "Wallet address",
  },
  {
    id: "timestamp",
    numeric: false,
    disablePadding: false,
    label: "Time of request",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
];

type EnhancedTableProps = {
  onRequestSort: (
    event: MouseEvent<unknown>,
    property: keyof PaymentHistory
  ) => void;
  order: Order;
  orderBy: string;
};

function EnhancedTableHead({
  order,
  orderBy,
  onRequestSort,
}: EnhancedTableProps) {
  const createSortHandler =
    (property: keyof PaymentHistory) => (event: MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

    const { t } = useTranslation();

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {t(headCell.label)}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

type PaymentHistoryProps = {
  statusPayment: string | null;
};

export const PaymentHistory = ({ statusPayment }: PaymentHistoryProps) => {
  const paymentHistory: PaymentHistory[] = JSON.parse(statusPayment ?? "[]");

  const [order, setOrder] = useState<Order>("desc");
  const [orderBy, setOrderBy] = useState<keyof PaymentHistory>("timestamp");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (
    event: MouseEvent<unknown>,
    property: keyof PaymentHistory
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onChangePage = (_e: unknown, nextPage: number) => {
    setPage(nextPage);
  };

  const onChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const sortedRows = paymentHistory
    .sort(getComparator(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const { t } = useTranslation();
  return (
    <Box>
      <CustomPaper>
        <Toolbar
          sx={{
            pl: { sm: 2 },
            pr: { xs: 1, sm: 1 },
          }}
        >
          <Typography variant="h2" id="tableTitle" component="div">
            {t("Withdrawal History")}
          </Typography>
        </Toolbar>
        <TableContainer className="mobile-wrap">
          <Table className="mobile-container">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {sortedRows.map((row, idx) => {
                return (
                  <CustomTableRow hover key={idx}>
                    <TableCell>{row.paymentMethod}</TableCell>
                    <TableCell>{row.USD}$</TableCell>
                    <TableCell>{row.paymentAddress}</TableCell>
                    <TableCell>
                      {dayjs(row.timestamp).format(
                        "ddd, DD MMM YYYY hh:mm:ss a"
                      )}
                    </TableCell>
                    {row.status === "Waiting" ? (
                      <WaitingStatusCell>{row.status}</WaitingStatusCell>
                    ) : (
                      <ActiveStatusCell>{row.status}</ActiveStatusCell>
                    )}
                  </CustomTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={paymentHistory.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={onChangePage}
          onRowsPerPageChange={onChangeRowsPerPage}
        />
      </CustomPaper>
    </Box>
  );
};

const CustomTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F0F3F7",
  },
}));
const WaitingStatusCell = styled(TableCell)(({ theme }) => ({
  color: "#BC7710",
}));
const ActiveStatusCell = styled(TableCell)(({ theme }) => ({
  color: "#07B963",
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  boxShadow: "none",
}));
