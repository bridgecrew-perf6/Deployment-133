import {
  SelectColumnFilter,
  DefaultColumnFilter,
  NumberRangeColumnFilter,
  SliderColumnFilter,
  RangeSliderColumnFilter,
} from "./Filter";

export var COLUMNS = [
  {
    Header: "Lot No",
    accessor: "materialLotno",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "작업 시작 시각",
    accessor: "joborderResultStartTime",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "작업 종료 시각",
    accessor: "joborderResultFinishTime",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "지시 번호",
    accessor: "joborderOrdernum",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "폭",
    accessor: "joborderWidth",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
  {
    Header: "작업자",
    accessor: "userName",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "계획 중량",
    accessor: "joborderWeight",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
  {
    Header: "생산 중량",
    accessor: "joborderResultWeight",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
  {
    Header: "중량 차이",
    accessor: "weightDifference",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
  {
    Header: "창고",
    accessor: "warehouseName",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "품번",
    accessor: "materialProdName",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
];
