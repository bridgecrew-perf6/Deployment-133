import {
  SelectColumnFilter,
  DefaultColumnFilter,
  NumberRangeColumnFilter,
  SliderColumnFilter,
  RangeSliderColumnFilter,
} from "../Performance/Filter";

export var COLUMNS = [
  {
    Header: "지시 일자",
    accessor: "joborderRegDate",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "긴급 여부",
    accessor: "joborderEmg",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "지시명",
    accessor: "joborderJobname",
    Filter: DefaultColumnFilter,
    // filter: "fuzzyText",
  },
  {
    Header: "사업장",
    accessor: "joborderWorkplace",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "설비",
    accessor: "slitterName",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "원자재명",
    accessor: "materialProdName",
    Filter: SelectColumnFilter,
    filter: "includes",
  },
  {
    Header: "투입재 폭",
    accessor: "materialWidth",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
  {
    Header: "계획 폭",
    accessor: "joborderWidth",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
  {
    Header: "전체 줄 수",
    accessor: "joborderLine",
    Filter: RangeSliderColumnFilter,
    filter: "between",
  },
];
