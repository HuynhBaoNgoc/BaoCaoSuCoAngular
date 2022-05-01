import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-report-problem-history',
  templateUrl: './report-problem-history.component.html',
  styleUrls: ['./report-problem-history.component.scss']
})

export class ReportProblemHistoryComponent implements OnInit {

  ngOnInit(): void {
  }

  people: any[] = [
    {
      "id":"0001",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Đã phân loại",
      "tgxl":"Đúng giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0002",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Chờ xử lý",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0003",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Nháp",
      "tgxl":"Đúng giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Đã huỷ",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Nháp",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Nháp",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Nháp",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Nháp",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat dien",
      "tt":"Nháp",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
    {
      "id":"0004",
      "htbc":"tình nguyện",
      "mtsc":"Bi mat diensdasdasdasdasdasdasdasdasdadasdadasdadsadasd",
      "tt":"Nháp",
      "tgxl":"Trễ giờ",
      "ah":"nhe",
      "pl":"xong"
    },
  ];


  //#region thay đổi style của menu filter
  activeBtn={
    btn:0,
  }

  }
