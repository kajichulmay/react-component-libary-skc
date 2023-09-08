import React from "react";
import { render } from "@testing-library/react";

import DataTables from "./DataTables";

import "./DataTables.scss";

const columns = [
  {
    key: "time_start",
    title: "วันที่บิน",
    textAlign: "left",
    sort: true,
    width: "10%",
  },
  {
    key: "area_name",
    title: "สถานที่",
    textAlign: "left",
    sort: true,
    width: "30%",
  },
  { key: "area", title: "พื้นที่ทำงาน (ไร่)", textAlign: "left", sort: true, width: "10%" },
  { key: "hour", title: "ระยะเวลาบิน (ชม.)", textAlign: "left", sort: true, width: "10%" },
];

const data = {
  totalItems: 628,
  totalPages: 63,
  data: [
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "b1d5f275-0ff7-4994-b9f1-4447ae0ed615",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "17/12/2022 14:25",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.01",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "020df45b-552b-4bfc-a838-a6beb0cd9948",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T07:22:19.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.01",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "0ade8640-555e-461b-b385-27d30c8f4673",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T07:17:38.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.01",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "3471ccfd-1907-4066-baba-da00e464c3a3",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T07:12:30.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.01",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "b87a1c90-d2ca-4567-b492-1726650b09c7",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T07:05:29.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.01",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "042de8c1-3b9d-4e2c-8664-ca5f87727508",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T07:02:50.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.01",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "88346451-f448-43ff-87e9-4bcf7ebbc415",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T05:22:28.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.02",
      hour: "0.02",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "394fbe4c-7a9a-4947-9fc0-48ff9a92d6cf",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T05:16:09.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.01",
      hour: "0.02",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "b2cd120a-4e1e-4d30-88c2-91021c32af9d",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T05:10:43.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.02",
      hour: "0.02",
      drone_model: "K-D40",
    },
    {
      drone_model_id: "59a7d1c0-650e-4d9d-8dad-dc7d5d0d5098",
      id: "617a92b7-eef7-410c-855f-1b9fb30e2150",
      dat_drone_id: "c061e007-4fce-4658-b168-7e1fcbc60ec8",
      time_start: "2022-12-17T05:03:21.000Z",
      area_name: "Fountain Tree Resort (ฟาวน์เท่น ทรี รีสอร์ท), 16 Moo 7, Pak Chong, Nakhon Ratchasima 30130, Thailand",
      area: "0",
      hoursort: "0.03",
      hour: "0.03",
      drone_model: "K-D40",
    },
  ],
};

const onChangePagination = (page: number, pageSize: number) => {
  console.log("page :>> ", page);
  console.log("pageSize :>> ", pageSize);
};

const onSort = (columnName: string, sortType: string) => {
  console.log("columnName :>> ", columnName);
  console.log("sortType :>> ", sortType);
};

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

describe("DataTables Component", () => {
  test("renders the DataTables component", () => {
    render(
      <DataTables
        onChangePagination={onChangePagination}
        column={columns}
        row={data?.data}
        isPagination={true}
        pageSize={10}
        total={data?.totalItems}
        page={1}
        onSort={onSort}
        isShowBorderLine={true}
      />
    );
  });
});
