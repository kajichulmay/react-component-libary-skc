import React from "react";
import { render } from "@testing-library/react";

import ChartsMap from "./ChartsMap";

import "./ChartsMap.scss";

const mapData = [
  [
    {
      v: "Country",
      f: "value",
      p: "0",
      code_jvector: "code_jvector",
    },
    "",
  ],
  [
    "LA",
    {
      v: 1,
      f: "ลาว 4",
      p: "1.27",
    },
  ],
  [
    "KH",
    {
      v: 0,
      f: "กัมพูชา 0",
      p: "0",
    },
  ],
  [
    "TH-30",
    {
      v: 4,
      f: "นครราชสีมา 34",
      p: "10.79",
      code_jvector: "TH-30",
    },
  ],
  [
    "TH-60",
    {
      v: 4,
      f: "นครสวรรค์ 32",
      p: "10.16",
      code_jvector: "TH-60",
    },
  ],
  [
    "TH-65",
    {
      v: 3,
      f: "พิษณุโลก 17",
      p: "5.4",
      code_jvector: "TH-65",
    },
  ],
  [
    "TH-24",
    {
      v: 2,
      f: "ฉะเชิงเทรา 15",
      p: "4.76",
      code_jvector: "TH-24",
    },
  ],
  [
    "TH-71",
    {
      v: 2,
      f: "กาญจนบุรี 14",
      p: "4.44",
      code_jvector: "TH-71",
    },
  ],
  [
    "TH-66",
    {
      v: 2,
      f: "พิจิตร 14",
      p: "4.44",
      code_jvector: "TH-66",
    },
  ],
  [
    "TH-16",
    {
      v: 2,
      f: "ลพบุรี 13",
      p: "4.13",
      code_jvector: "TH-16",
    },
  ],
  [
    "TH-61",
    {
      v: 2,
      f: "อุทัยธานี 12",
      p: "3.81",
      code_jvector: "TH-61",
    },
  ],
  [
    "TH-64",
    {
      v: 2,
      f: "สุโขทัย 11",
      p: "3.49",
      code_jvector: "TH-64",
    },
  ],
  [
    "TH-46",
    {
      v: 2,
      f: "กาฬสินธุ์ 10",
      p: "3.17",
      code_jvector: "TH-46",
    },
  ],
  [
    "TH-57",
    {
      v: 2,
      f: "เชียงราย 9",
      p: "2.86",
      code_jvector: "TH-57",
    },
  ],
  [
    "TH-50",
    {
      v: 2,
      f: "เชียงใหม่ 8",
      p: "2.54",
      code_jvector: "TH-50",
    },
  ],
  [
    "TH-41",
    {
      v: 2,
      f: "อุดรธานี 8",
      p: "2.54",
      code_jvector: "TH-41",
    },
  ],
  [
    "TH-67",
    {
      v: 2,
      f: "เพชรบูรณ์ 7",
      p: "2.22",
      code_jvector: "TH-67",
    },
  ],
  [
    "TH-90",
    {
      v: 1,
      f: "สงขลา 6",
      p: "1.9",
      code_jvector: "TH-90",
    },
  ],
  [
    "TH-72",
    {
      v: 1,
      f: "สุพรรณบุรี 5",
      p: "1.59",
      code_jvector: "TH-72",
    },
  ],
  [
    "TH-56",
    {
      v: 1,
      f: "พะเยา 5",
      p: "1.59",
      code_jvector: "TH-56",
    },
  ],
  [
    "TH-55",
    {
      v: 1,
      f: "น่าน 5",
      p: "1.59",
      code_jvector: "TH-55",
    },
  ],
  [
    "TH-47",
    {
      v: 1,
      f: "สกลนคร 5",
      p: "1.59",
      code_jvector: "TH-47",
    },
  ],
  [
    "TH-52",
    {
      v: 1,
      f: "ลำปาง 5",
      p: "1.59",
      code_jvector: "TH-52",
    },
  ],
  [
    "TH-27",
    {
      v: 1,
      f: "สระแก้ว 5",
      p: "1.59",
      code_jvector: "TH-27",
    },
  ],
  [
    "TH-31",
    {
      v: 1,
      f: "บุรีรัมย์ 4",
      p: "1.27",
      code_jvector: "TH-31",
    },
  ],
  [
    "TH-39",
    {
      v: 1,
      f: "หนองบัวลำภู 4",
      p: "1.27",
      code_jvector: "TH-39",
    },
  ],
  [
    "TH-32",
    {
      v: 1,
      f: "สุรินทร์ 4",
      p: "1.27",
      code_jvector: "TH-32",
    },
  ],
  [
    "TH-10",
    {
      v: 1,
      f: "กรุงเทพมหานคร 4",
      p: "1.27",
      code_jvector: "TH-10",
    },
  ],
  [
    "TH-18",
    {
      v: 1,
      f: "ชัยนาท 4",
      p: "1.27",
      code_jvector: "TH-18",
    },
  ],
  [
    "TH-19",
    {
      v: 1,
      f: "สระบุรี 4",
      p: "1.27",
      code_jvector: "TH-19",
    },
  ],
  [
    "TH-33",
    {
      v: 1,
      f: "ศรีสะเกษ 4",
      p: "1.27",
      code_jvector: "TH-33",
    },
  ],
  [
    "TH-22",
    {
      v: 1,
      f: "จันทบุรี 4",
      p: "1.27",
      code_jvector: "TH-22",
    },
  ],
  [
    "TH-53",
    {
      v: 1,
      f: "อุตรดิตถ์ 3",
      p: "0.95",
      code_jvector: "TH-53",
    },
  ],
  [
    "TH-40",
    {
      v: 1,
      f: "ขอนแก่น 3",
      p: "0.95",
      code_jvector: "TH-40",
    },
  ],
  [
    "TH-25",
    {
      v: 1,
      f: "ปราจีนบุรี 3",
      p: "0.95",
      code_jvector: "TH-25",
    },
  ],
  [
    "TH-76",
    {
      v: 1,
      f: "เพชรบุรี 3",
      p: "0.95",
      code_jvector: "TH-76",
    },
  ],
  [
    "TH-62",
    {
      v: 1,
      f: "กำแพงเพชร 3",
      p: "0.95",
      code_jvector: "TH-62",
    },
  ],
  [
    "TH-14",
    {
      v: 1,
      f: "พระนครศรีอยุธยา 3",
      p: "0.95",
      code_jvector: "TH-14",
    },
  ],
  [
    "TH-43",
    {
      v: 1,
      f: "หนองคาย 2",
      p: "0.63",
      code_jvector: "TH-43",
    },
  ],
  [
    "TH-54",
    {
      v: 1,
      f: "แพร่ 2",
      p: "0.63",
      code_jvector: "TH-54",
    },
  ],
  [
    "TH-34",
    {
      v: 1,
      f: "อุบลราชธานี 2",
      p: "0.63",
      code_jvector: "TH-34",
    },
  ],
  [
    "TH-35",
    {
      v: 1,
      f: "ยโสธร 2",
      p: "0.63",
      code_jvector: "TH-35",
    },
  ],
  [
    "TH-44",
    {
      v: 1,
      f: "มหาสารคาม 2",
      p: "0.63",
      code_jvector: "TH-44",
    },
  ],
  [
    "TH-13",
    {
      v: 1,
      f: "ปทุมธานี 2",
      p: "0.63",
      code_jvector: "TH-13",
    },
  ],
  [
    "TH-63",
    {
      v: 1,
      f: "ตาก 2",
      p: "0.63",
      code_jvector: "TH-63",
    },
  ],
  [
    "TH-17",
    {
      v: 1,
      f: "สิงห์บุรี 2",
      p: "0.63",
      code_jvector: "TH-17",
    },
  ],
  [
    "TH-36",
    {
      v: 1,
      f: "ชัยภูมิ 1",
      p: "0.32",
      code_jvector: "TH-36",
    },
  ],
  [
    "TH-49",
    {
      v: 1,
      f: "มุกดาหาร 1",
      p: "0.32",
      code_jvector: "TH-49",
    },
  ],
  [
    "TH-48",
    {
      v: 1,
      f: "นครพนม 1",
      p: "0.32",
      code_jvector: "TH-48",
    },
  ],
  [
    "TH-15",
    {
      v: 1,
      f: "อ่างทอง 1",
      p: "0.32",
      code_jvector: "TH-15",
    },
  ],
  [
    "TH-73",
    {
      v: 1,
      f: "นครปฐม 1",
      p: "0.32",
      code_jvector: "TH-73",
    },
  ],
  [
    "TH-26",
    {
      v: 1,
      f: "นครนายก 1",
      p: "0.32",
      code_jvector: "TH-26",
    },
  ],
  [
    "TH-20",
    {
      v: 1,
      f: "ชลบุรี 1",
      p: "0.32",
      code_jvector: "TH-20",
    },
  ],
  [
    "TH-70",
    {
      v: 1,
      f: "ราชบุรี 1",
      p: "0.32",
      code_jvector: "TH-70",
    },
  ],
  [
    "TH-38",
    {
      v: 1,
      f: "บึงกาฬ 1",
      p: "0.32",
      code_jvector: "TH-38",
    },
  ],
  [
    "TH-58",
    {
      v: 0,
      f: "แม่ฮ่องสอน 0",
      p: "0",
      code_jvector: "TH-58",
    },
  ],
  [
    "TH-51",
    {
      v: 0,
      f: "ลำพูน 0",
      p: "0",
      code_jvector: "TH-51",
    },
  ],
  [
    "TH-86",
    {
      v: 0,
      f: "ชุมพร 0",
      p: "0",
      code_jvector: "TH-86",
    },
  ],
  [
    "TH-37",
    {
      v: 0,
      f: "อำนาจเจริญ 0",
      p: "0",
      code_jvector: "TH-37",
    },
  ],
  [
    "TH-42",
    {
      v: 0,
      f: "เลย 0",
      p: "0",
      code_jvector: "TH-42",
    },
  ],
  [
    "TH-74",
    {
      v: 0,
      f: "สมุทรสาคร 0",
      p: "0",
      code_jvector: "TH-74",
    },
  ],
  [
    "TH-82",
    {
      v: 0,
      f: "พังงา 0",
      p: "0",
      code_jvector: "TH-82",
    },
  ],
  [
    "TH-83",
    {
      v: 0,
      f: "ภูเก็ต 0",
      p: "0",
      code_jvector: "TH-83",
    },
  ],
  [
    "TH-85",
    {
      v: 0,
      f: "ระนอง 0",
      p: "0",
      code_jvector: "TH-85",
    },
  ],
  [
    "TH-84",
    {
      v: 0,
      f: "สุราษฎร์ธานี 0",
      p: "0",
      code_jvector: "TH-84",
    },
  ],
  [
    "TH-91",
    {
      v: 0,
      f: "สตูล 0",
      p: "0",
      code_jvector: "TH-91",
    },
  ],
  [
    "TH-95",
    {
      v: 0,
      f: "ยะลา 0",
      p: "0",
      code_jvector: "TH-95",
    },
  ],
  [
    "TH-93",
    {
      v: 0,
      f: "พัทลุง 0",
      p: "0",
      code_jvector: "TH-93",
    },
  ],
  [
    "TH-11",
    {
      v: 0,
      f: "สมุทรปราการ 0",
      p: "0",
      code_jvector: "TH-11",
    },
  ],
  [
    "TH-75",
    {
      v: 0,
      f: "สมุทรสงคราม 0",
      p: "0",
      code_jvector: "TH-75",
    },
  ],
  [
    "TH-12",
    {
      v: 0,
      f: "นนทบุรี 0",
      p: "0",
      code_jvector: "TH-12",
    },
  ],
  [
    "TH-94",
    {
      v: 0,
      f: "ปัตตานี 0",
      p: "0",
      code_jvector: "TH-94",
    },
  ],
  [
    "TH-81",
    {
      v: 0,
      f: "กระบี่ 0",
      p: "0",
      code_jvector: "TH-81",
    },
  ],
  [
    "TH-21",
    {
      v: 0,
      f: "ระยอง 0",
      p: "0",
      code_jvector: "TH-21",
    },
  ],
  [
    "TH-23",
    {
      v: 0,
      f: "ตราด 0",
      p: "0",
      code_jvector: "TH-23",
    },
  ],
  [
    "TH-77",
    {
      v: 0,
      f: "ประจวบคีรีขันธ์ 0",
      p: "0",
      code_jvector: "TH-77",
    },
  ],
  [
    "TH-45",
    {
      v: 0,
      f: "ร้อยเอ็ด 0",
      p: "0",
      code_jvector: "TH-45",
    },
  ],
  [
    "TH-80",
    {
      v: 0,
      f: "นครศรีธรรมราช 0",
      p: "0",
      code_jvector: "TH-80",
    },
  ],
  [
    "TH-96",
    {
      v: 0,
      f: "นราธิวาส 0",
      p: "0",
      code_jvector: "TH-96",
    },
  ],
  [
    "TH-92",
    {
      v: 0,
      f: "ตรัง 0",
      p: "0",
      code_jvector: "TH-92",
    },
  ],
];

const filter = { country: "all" };

describe("ChartsMap Component", () => {
  test("renders the ChartsMap component", () => {
    render(<ChartsMap />);
  });
});
