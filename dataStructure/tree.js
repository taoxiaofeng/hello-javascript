const mockList = [
  {
    "uuid": "1",
    "name": "服务提供",
    "sort": 1,
    "remark": "",
    "unit": null,
    "depth": "1",
    "value": null,
    "score": null,
    "performanceContent": null,
    "scoreLevel": null,
    "parentUuid": "0",
    "prefix": "一、",
    "dataSource": null,
    "roles": null,
    "maxValue": null,
    "children": [
      {
        "uuid": "2",
        "name": "功能定位",
        "sort": 2,
        "remark": "",
        "unit": null,
        "depth": "2",
        "value": null,
        "score": null,
        "performanceContent": null,
        "scoreLevel": null,
        "parentUuid": "1",
        "prefix": "(一)",
        "dataSource": null,
        "roles": null,
        "maxValue": null,
        "children": [
          {
            "uuid": "3",
            "name": "诊疗人次数",
            "sort": 3,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "2",
            "prefix": "1",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定量指标",
            "children": [
              {
                "uuid": "4",
                "name": "门急诊人次增长率",
                "sort": 4,
                "remark": "考核本年度（即考核年度）基层医疗卫生机构门急诊人次数较上年度门急诊人次数的增长幅度。",
                "unit": "%",
                "depth": "4",
                "value": "283.80",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "3",
                "prefix": "1.1",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "5",
                    "name": "本年度门急诊人次数",
                    "sort": 5,
                    "remark": "本年度门急诊人次数是指考核当年门急诊人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "1232",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "4",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "6",
                    "name": "上年度门急诊人次数",
                    "sort": 6,
                    "remark": "上年度门急诊人次数是指考核当年的上一年度门急诊人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "321",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "4",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              },
              {
                "uuid": "8",
                "name": "每万人服务门诊当量",
                "sort": 8,
                "remark": "考核基层医疗卫生机构年度内为辖区每万常住居民提供的门诊服务当量。",
                "unit": "个",
                "depth": "4",
                "value": "60.00",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "3",
                "prefix": "1.2",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "9",
                    "name": "辖区门诊服务总当量",
                    "sort": 9,
                    "remark": "是指一定服务周期内（一般以考核年度计）按照当地标化工作当量标准计算的辖区门急诊服务总当量。",
                    "unit": "",
                    "depth": "5",
                    "value": "60",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "8",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "DECIMAL",
                        "message": "请输入正数、小数点（保留两位）"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "10",
                    "name": "辖区内常住居民数",
                    "sort": 10,
                    "remark": "主要包括在辖区内居住半年以上的户籍及非户籍居民，以统计部门公布的辖区常住人口数据为主要依据。",
                    "unit": "",
                    "depth": "5",
                    "value": "10000",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "8",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              },
              {
                "uuid": "11",
                "name": "乡镇卫生院和社区卫生服务机构诊疗人次占比",
                "sort": 11,
                "remark": "考核年度辖区所有乡镇卫生院和社区卫生服务机构诊疗人次占辖区总诊疗人次的比例。",
                "unit": "%",
                "depth": "4",
                "value": "30.00",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "3",
                "prefix": "1.3",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "12",
                    "name": "辖区乡镇卫生院和社区卫生服务机构总诊疗人次数",
                    "sort": 12,
                    "remark": "是指一定周期内辖区所有卫生院和社区卫生服务中心的总诊疗人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "30",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "11",
                    "prefix": null,
                    "dataSource": "自动采集",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "13",
                    "name": "辖区所有医疗机构总诊疗人次数",
                    "sort": 13,
                    "remark": "是指同周期内辖区内所有医疗机构的总诊疗人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "100",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "11",
                    "prefix": null,
                    "dataSource": "自动采集",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              }
            ]
          },
          {
            "uuid": "14",
            "name": "出院人数",
            "sort": 14,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "2",
            "prefix": "2",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定量指标",
            "children": [
              {
                "uuid": "15",
                "name": "出院人次增长率",
                "sort": 15,
                "remark": "考核基层医疗卫生机构本年度出院人次数比上年度出院人次数的增长情况。",
                "unit": "%",
                "depth": "4",
                "value": "1483.33",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "14",
                "prefix": "2.1",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "16",
                    "name": "本年度出院人次数",
                    "sort": 16,
                    "remark": "是指同周期内辖区内所有医疗机构的总诊疗人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "190",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "15",
                    "prefix": null,
                    "dataSource": "自动采集",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "17",
                    "name": "上年度出院人次数",
                    "sort": 17,
                    "remark": "上年度出院人次数是指考核当年的上一年度出院人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "12",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "15",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              },
              {
                "uuid": "19",
                "name": "每万人服务住院当量",
                "sort": 19,
                "remark": "考核一定服务周期内为辖区每万人口提供的住院服务当量。",
                "unit": "个",
                "depth": "4",
                "value": "10.28",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "14",
                "prefix": "2.2",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "20",
                    "name": "辖区住院总当量",
                    "sort": 20,
                    "remark": "指一定服务周期内（一般以考核年度计），按照当地标化工作当量标准计算的辖区住院服务总当量。",
                    "unit": "",
                    "depth": "5",
                    "value": "321",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "19",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "DECIMAL",
                        "message": "请输入正数、小数点（保留两位）"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "21",
                    "name": "辖区内常住居民数",
                    "sort": 21,
                    "remark": "辖区内常住居民数主要包括在辖区内居住半年以上的户籍及非户籍居民，以统计部门公布的辖区常住人口数据为主要依据。",
                    "unit": "",
                    "depth": "5",
                    "value": "312321",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "19",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONSITE"
              }
            ]
          },
          {
            "uuid": "22",
            "name": "中医药服务",
            "sort": 22,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "2",
            "prefix": "3",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定量指标",
            "children": [
              {
                "uuid": "23",
                "name": "中医诊疗人次占比",
                "sort": 23,
                "remark": "考核一定周期内基层医疗卫生机构中医诊疗人次数占总诊疗人次数之比。",
                "unit": "%",
                "depth": "4",
                "value": "65.62",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "22",
                "prefix": "3.1",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "24",
                    "name": "中医诊疗人次数",
                    "sort": 24,
                    "remark": "是指在一定周期内（一般以考核年度计）在基层医疗卫生机构提供中医药服务的门诊人次，包括中药饮片处方数、非药物疗法诊疗人次数、中成药处方数。",
                    "unit": "",
                    "depth": "5",
                    "value": "21",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "23",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "25",
                    "name": "总诊疗人次数",
                    "sort": 25,
                    "remark": "按照中医医疗管理统计年报口径，该指标总诊疗人次数是指病人来基层医疗卫生机构就诊的门诊、急诊人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "32",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "23",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONSITE"
              },
              {
                "uuid": "26",
                "name": "提供中医医疗技术方法种类",
                "sort": 26,
                "remark": "考核本年度基层医疗卫生机构能够开展的中医医疗技术方法种类数。",
                "unit": "个",
                "depth": "4",
                "value": "0",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "22",
                "prefix": "3.2",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "27",
                    "name": "本年度基层医疗卫生机构能够开展的中医医疗技术方法种类数",
                    "sort": 27,
                    "remark": "本年度基层医疗卫生机构能够开展的中医医疗技术方法种类数",
                    "unit": "",
                    "depth": "5",
                    "value": "20",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "26",
                    "prefix": null,
                    "dataSource": "自动采集",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONSITE"
              },
              {
                "uuid": "28",
                "name": "门诊中医非药物疗法诊疗人次占比",
                "sort": 28,
                "remark": "考核一定周期内门诊中医非药物疗法诊疗人次占总诊疗人次数的比值。",
                "unit": "%",
                "depth": "4",
                "value": "8.96",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "22",
                "prefix": "3.3",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "29",
                    "name": "本年度门诊中医非药物疗法诊疗人次数",
                    "sort": 29,
                    "remark": "指考核年度有中医非药物疗法收费的门诊人次数。按疗程收费的，可按实际收费天数计算门诊人次数。中医非药物疗法是指中西药物以外的所有用中医辨证施治原则指导下的医疗保健技术的总称，包含针刺、艾灸、推拿、拔罐、刮痧、熏洗、穴位敷贴、穴位埋线、穴位注射、头皮针、放血疗法等。",
                    "unit": "",
                    "depth": "5",
                    "value": "19",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "28",
                    "prefix": null,
                    "dataSource": "自动采集",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "30",
                    "name": "总诊疗人次数",
                    "sort": 30,
                    "remark": "按照中医医疗管理统计年报口径，该指标总诊疗人次数是指病人来基层医疗卫生机构就诊的门诊、急诊人次数。",
                    "unit": "",
                    "depth": "5",
                    "value": "212",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "28",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONSITE"
              }
            ]
          },
          {
            "uuid": "147",
            "name": "“优质服务基层行”活动达到基本标准和推荐标准的机构数量",
            "sort": 147,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "2",
            "prefix": "19",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定性指标",
            "children": [
              {
                "uuid": "148",
                "name": "达到国家卫生健康委、国家中医药局“优质服务基层行”活动《乡镇卫生院能力标准》《社区卫生服务中心服务能力标准》中基本标准",
                "sort": 148,
                "remark": "考核基层医疗卫生机构是否达到国家卫生健康委、国家中医药局“优质服务基层行”活动《乡镇卫生院能力标准》《社区卫生服务中心服务能力标准》中基本标准和推荐标准。",
                "unit": "",
                "depth": "4",
                "value": "dsa",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "147",
                "prefix": "19.1",
                "dataSource": "手工录入",
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定性指标",
                "appealStatus": "待审核",
                "scoreLevels": [
                  {
                    "uuid": "d2fa07ad-2797-454d-a829-2fb47cf80045",
                    "scoreLevel": "全部达标",
                    "targetValue": 5,
                    "sort": 1,
                    "scoreType": ""
                  },
                  {
                    "uuid": "f1ff6d19-fbed-4372-9bee-c51df3c85cc8",
                    "scoreLevel": "基本达标",
                    "targetValue": 3,
                    "sort": 2,
                    "scoreType": null
                  },
                  {
                    "uuid": "69e93e9e-f986-452b-b560-4558879bf835",
                    "scoreLevel": "未达标",
                    "targetValue": 1,
                    "sort": 3,
                    "scoreType": null
                  }
                ],
                "children": [],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "uuid": "209",
    "name": "综合管理",
    "sort": 209,
    "remark": "",
    "unit": null,
    "depth": "1",
    "value": null,
    "score": null,
    "performanceContent": null,
    "scoreLevel": null,
    "parentUuid": "0",
    "prefix": "二、",
    "dataSource": null,
    "roles": null,
    "maxValue": null,
    "children": [
      {
        "uuid": "210",
        "name": "经济管理",
        "sort": 210,
        "remark": "",
        "unit": null,
        "depth": "2",
        "value": null,
        "score": null,
        "performanceContent": null,
        "scoreLevel": null,
        "parentUuid": "209",
        "prefix": "(一)",
        "dataSource": null,
        "roles": null,
        "maxValue": null,
        "children": [
          {
            "uuid": "211",
            "name": "门急诊费用",
            "sort": 211,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "210",
            "prefix": "1",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定量指标",
            "children": [
              {
                "uuid": "212",
                "name": "门急诊次均费用",
                "sort": 212,
                "remark": "指考核年度门急诊患者平均每次就诊的医疗费用。",
                "unit": "元",
                "depth": "4",
                "value": "0.26",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "211",
                "prefix": "1.1",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "213",
                    "name": "门急诊收入",
                    "sort": 213,
                    "remark": "是指基层医疗卫生机构开展门急诊医疗服务所取得的收入，包括挂号收入、诊察收入、检查收入、化验收入、治疗收入、手术收入、卫生材料收入、药品收入、药事服务费收入、一般诊疗费收入、其他门诊收入等。体检收入与疫苗收入除外。",
                    "unit": "",
                    "depth": "5",
                    "value": "32",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "212",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "DECIMAL",
                        "message": "请输入正数、小数点（保留两位）"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "214",
                    "name": "年门急诊人次数",
                    "sort": 214,
                    "remark": "是指考核年度病人来基层医疗卫生机构就诊的门诊、急诊人次。体检人次与疫苗接种人次除外。",
                    "unit": "",
                    "depth": "5",
                    "value": "123",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "212",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "uuid": "290",
    "name": "可持续发展",
    "sort": 290,
    "remark": "",
    "unit": null,
    "depth": "1",
    "value": null,
    "score": null,
    "performanceContent": null,
    "scoreLevel": null,
    "parentUuid": "0",
    "prefix": "三、",
    "dataSource": null,
    "roles": null,
    "maxValue": null,
    "children": [
      {
        "uuid": "291",
        "name": "人力配置",
        "sort": 291,
        "remark": "",
        "unit": null,
        "depth": "2",
        "value": null,
        "score": null,
        "performanceContent": null,
        "scoreLevel": null,
        "parentUuid": "290",
        "prefix": "(一)",
        "dataSource": null,
        "roles": null,
        "maxValue": null,
        "children": [
          {
            "uuid": "292",
            "name": "每万人口全科医生数",
            "sort": 292,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "291",
            "prefix": "1",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定量指标",
            "children": [
              {
                "uuid": "293",
                "name": "每万人口全科医生数",
                "sort": 293,
                "remark": "每1 万名辖区常住服务人口拥有的全科医生数。",
                "unit": "人",
                "depth": "4",
                "value": "102.78",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "292",
                "prefix": "1.1",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "294",
                    "name": "基层医疗卫生机构全科医生数",
                    "sort": 294,
                    "remark": "全科医生数指注册为全科医学专业或取得全科医生培训合格证的执业（助理）医师数之和。①基层卫生医疗机构注册为全科医学专业的人数：指医疗卫生机构中取得执业（助理）医师证书且执业范围为“全科医学专业”人数，包括拥有多项执业范围，加注册“全科医学专业”的人数。②取得全科医生培训合格证书的人数：指基层医疗卫生机构取得全科医生转岗培训、骨干培训、岗位培训和全科专业住院医师规范化培训、助理全科医生培训合格证的执业（助理）医师之和，不包括取得合格证书已注册为“全科医学专业”的人数，不得重复统计。",
                    "unit": "",
                    "depth": "5",
                    "value": "321",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "293",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "295",
                    "name": "服务人口数",
                    "sort": 295,
                    "remark": "服务人口数指辖区内常住居民数，主要包括在辖区内居住半年以上的户籍及非户籍居民，以统计部门公布的辖区常住人口数据为主要依据。",
                    "unit": "",
                    "depth": "5",
                    "value": "31231",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "293",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "uuid": "313",
    "name": "满意度评价",
    "sort": 313,
    "remark": "",
    "unit": null,
    "depth": "1",
    "value": null,
    "score": null,
    "performanceContent": null,
    "scoreLevel": null,
    "parentUuid": "0",
    "prefix": "四、",
    "dataSource": null,
    "roles": null,
    "maxValue": null,
    "children": [
      {
        "uuid": "314",
        "name": "服务对象满意度",
        "sort": 314,
        "remark": "",
        "unit": null,
        "depth": "2",
        "value": null,
        "score": null,
        "performanceContent": null,
        "scoreLevel": null,
        "parentUuid": "313",
        "prefix": "(一)",
        "dataSource": null,
        "roles": null,
        "maxValue": null,
        "children": [
          {
            "uuid": "315",
            "name": "服务对象满意度",
            "sort": 315,
            "remark": "",
            "unit": null,
            "depth": "3",
            "value": null,
            "score": null,
            "performanceContent": null,
            "scoreLevel": null,
            "parentUuid": "314",
            "prefix": "1",
            "dataSource": "",
            "roles": null,
            "maxValue": null,
            "indicatorType": "定量指标",
            "children": [
              {
                "uuid": "316",
                "name": "重点人群满意度",
                "sort": 316,
                "remark": "基层医疗卫生机构门诊就诊患者和接受基本公共卫生服务的重点人群对基本医疗和基本公共卫生服务的可及性、经济性、舒适性、安全性的总体满意度情况。",
                "unit": "%",
                "depth": "4",
                "value": "10.26",
                "score": null,
                "performanceContent": null,
                "scoreLevel": null,
                "parentUuid": "315",
                "prefix": "1.1",
                "dataSource": null,
                "roles": null,
                "maxValue": "5",
                "indicatorType": "定量指标",
                "appealStatus": "待审核",
                "scoreLevels": null,
                "children": [
                  {
                    "uuid": "317",
                    "name": "评价满意的被调查重点人群人数",
                    "sort": 317,
                    "remark": "重点人群包括基层医疗卫生机构门诊就诊患者和接受基本公共卫生服务的重点人群，满意度问卷调查维度包括对基本医疗和基本公共卫生服务的可及性、经济性、舒适性、安全性和总体满意度情况等。",
                    "unit": "",
                    "depth": "5",
                    "value": "32",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "316",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  },
                  {
                    "uuid": "318",
                    "name": "接受调查的被调查重点人群总数",
                    "sort": 318,
                    "remark": "重点人群包括基层医疗卫生机构门诊就诊患者和接受基本公共卫生服务的重点人群，满意度问卷调查维度包括对基本医疗和基本公共卫生服务的可及性、经济性、舒适性、安全性和总体满意度情况等。",
                    "unit": "",
                    "depth": "5",
                    "value": "312",
                    "score": null,
                    "performanceContent": null,
                    "scoreLevel": null,
                    "parentUuid": "316",
                    "prefix": null,
                    "dataSource": "手工录入",
                    "roles": [
                      {
                        "pattern": "NUMBER",
                        "message": "请输入正整数"
                      }
                    ],
                    "maxValue": null,
                    "appealStatus": "待审核",
                    "appealValue": null,
                    "appealReason": null,
                    "appealContent": null,
                    "rollbackReason": null
                  }
                ],
                "attachments": [],
                "performanceWayEnum": "ONLINE"
              }
            ]
          }
        ]
      }
    ]
  }
]

/**
 * JS树结构操作:查找、遍历、筛选、树和列表相互转换
 */
let tree = [
  {
    id: '1',
    title: '节点1',
    children: [
      {
        id: '1-1',
        title: '节点1-1'
      },
      {
        id: '1-2',
        title: '节点1-2'
      }
    ]
  },
  {
    id: '2',
    title: '节点2',
    children: [
      {
        id: '2-1',
        title: '节点2-1'
      }
    ]
  }
];

/**
 * 广度优先遍历
 * 广度优先的思路是，维护一个队列，队列的初始值为树结构根节点组成的列表，重复执行以下步骤直到队列为空：
 * 取出队列中的第一个元素，进行访问相关操作，然后将其后代元素（如果有）全部追加到队列最后。
 * 下面是代码实现，类似于数组的forEach遍历，我们将数组的访问操作交给调用者自定义，即一个回调函数：
 */

// function treeForeach(tree, func) {
//   let node, list = [...tree];
//   while (node = list.shift()) {
//     console.log(` list.shift() -- `, node)
//     func(node);
//     node.children && list.push(...node.children);
//   }
// }

// treeForeach(tree, node => { console.log(node.title) })

/**
 *  深度优先遍历的递归实现
 */
// 先序遍历
// function treeForeach(tree, func) {
//   tree.forEach(data => {
//     func(data);
//     data.children && treeForeach(data.children, func); // 遍历子树
//   })
// }

// 后序遍历，与先序遍历思想一致，代码也及其相似，只不过调换一下节点遍历和子树遍历的顺序：
// function treeForeach(tree, func) {
//   tree.forEach(data => {
//     data.children && treeForeach(data.children, func); // 遍历子树
//     func(data);
//   })
// }


/**
 * 深度优先循环实现
 */

//  先序遍历与广度优先循环实现类似，要维护一个队列，不同的是子节点不追加到队列最后，而是加到队列最前面：
// function treeForeach(tree, func) {
//   let node, list = [...tree];
//   while (node = list.shift()) {
//     func(node);
//     node.children && list.unshift(...node.children);
//   }
// }

// 后序遍历就略微复杂一点，我们需要不断将子树扩展到根节点前面去，（艰难地）执行列表遍历，遍历到某个节点如果它没有子节点或者它的子节点已经扩展到它前面了，则执行访问操作，否则扩展子节点到当前节点前面：
// function treeForeach(tree, func) {
//   let node, list = [...tree], i = 0;
//   while (node = list[i]) {
//     let childCount = node.children ? node.children.length : 0;
//     if (!childCount || node.children[childCount - 1] === list[i - 1]) {
//       func(node);
//       i++;
//     } else {
//       list.splice(i, 0, ...node.children);
//     }
//   }
// }

//  测试函数
// treeForeach(tree, node => { console.log(node.title) })

/**
 * 列表和树结构相互转换
 */
/**
 * 1. 列表转为树
 * 列表结构通常是在节点信息中给定了父级元素的id，然后通过这个依赖关系将列表转换为树形结构，列表结构是类似于：
 */
// let list = [
//   {
//     id: '1',
//     title: '节点1',
//     parentId: '',
//   },
//   {
//     id: '1-1',
//     title: '节点1-1',
//     parentId: '1'
//   },
//   {
//     id: '1-2',
//     title: '节点1-2',
//     parentId: '1'
//   },
//   {
//     id: '2',
//     title: '节点2',
//     parentId: ''
//   },
//   {
//     id: '2-1',
//     title: '节点2-1',
//     parentId: '2'
//   }
// ]

/**
 * 列表结构转为树结构，就是把所有非根节点放到对应父节点的chilren数组中，然后把根节点提取出来：
 */

// function listToTree(list = []) {
//   let info = list.reduce((map, node) => (map[node.id] = node, node.children = [], map), {});
//   // console.log(`info -- `, info)
//   return list.filter(node => {
//     info[node.parentId] && info[node.parentId].children.push(node);
//     return !node.parentId;
//   })
// }
/**
 * 这里首先通过info建立了id=>node的映射，因为对象取值的时间复杂度是O(1)，
 * 这样在接下来的找寻父元素就不需要再去遍历一次list了，因为遍历寻找父元素时间复杂度是O(n)，
 * 并且是在循环中遍历，则总体时间复杂度会变成O(n^2)，而上述实现的总体复杂度是O(n)。
 */

// console.log(listToTree(list));


// const newTree = listToTree(list);
// console.log(`newTree -- `, newTree)
/**
 * 树结构转换列表结构
 */

/**
 * 使用先序遍历将树结构转为列表结构
 */
// 递归实现
// function treeToList(tree, result = [], level = 0) {
//   tree.forEach(node => {
//     result.push(node);
//     node.level = level + 1;
//     console.log(`node -- `, node);
//     node.children && treeToList(node.children, result, level + 1);
//   });
//   return result;
// }

// 循环实现
// function treeToList (tree) {
//   let node, result = tree.map(node => (node.level = 1, node))
//   for (let i = 0; i < result.length; i++) {
//     if (!result[i].children) continue
//     let list = result[i].children.map(node => (node.level = result[i].level + 1, node))
//     result.splice(i+1, 0, ...list)
//   }
//   return result
// }

// console.log(treeToList(newTree))
// const mockList = require('./mock');
/**
 * 树结构筛选
 */
//  树结构过滤即保留某些符合条件的节点，剪裁掉其它节点。一个节点是否保留在过滤后的树结构中，取决于它以及后代节点中是否有符合条件的节点。可以传入一个函数描述符合条件的节点:
// function treeFilter (tree, func) {
//   // 使用map复制一下节点，避免修改到原树
//   return tree.map(node => ({ ...node })).filter(node => {
//     node.children = node.children && treeFilter(node.children, func)
//     return func(node) || (node.children && node.children.length)
//   })
// }

// 来自 https://stackoverflow.com/questions/45289854/how-to-effectively-filter-tree-view-retaining-its-existing-structure
// function filter(array, text) {
//   const getNodes = (result, object) => {
//       if (object.title === text) {
//           result.push(object);
//           return result;
//       }
//       if (Array.isArray(object.children)) {
//           const nodes = object.children.reduce(getNodes, []);
//           if (nodes.length) result.push({ ...object, nodes });
//       }
//       return result;
//   };

//   return array.reduce(getNodes, []);
// }

// console.log(filter(newTree, '节点1-1'));

// console.log(treeFilter(mockList, (node) => {
//   return node.dataSource === '自动采集' || node.indicatorType === '定量指标';
// }))

/**
 * 树结构查找
 */
/**
 * 查找节点
 * 查找节点其实就是一个遍历的过程，遍历到满足条件的节点则返回，遍历完成未找到则返回null。
 * 类似数组的find方法，传入一个函数用于判断节点是否符合条件，代码如下：
 */
function treeFind(tree, func) {
  for (const data of tree) {
    if (func(data)) { return data };
    if (data.children) {
      const res = treeFind(data.children, func);
      if (res) return res;
    }
  }
  return null;
}

// console.log(treeFind(tree, (node) => {
//   return node.title === '节点1-2';
// }))

/**
 * 查找节点路径
 * 略微复杂一点，因为不知道符合条件的节点在哪个子树，
 * 要用到回溯法的思想。查找路径要使用先序遍历，
 * 维护一个队列存储路径上每个节点的id，假设节点就在当前分支，
 * 如果当前分支查不到，则回溯。
 */

//  function treeFindPath (tree, func, path = []) {
//   if (!tree) return []
//   for (const data of tree) {
//     path.push(data.id)
//     if (func(data)) return path
//     if (data.children) {
//       const findChildren = treeFindPath(data.children, func, path)
//       if (findChildren.length) return findChildren
//     }
//     path.pop()
//   }
//   return []
// }

// let result = treeFindPath(tree, node => node.id === '2-1' || node.id === '1-1');
// console.log(result);

/**
 * 查找多条节点路径
 * 思路与查找节点路径相似，不过代码却更加简单：
 */

function treeFindPath(tree, func, path = [], result = []) {
  for (const data of tree) {
    path.push(data.id)
    func(data) && result.push([...path])
    data.children && treeFindPath(data.children, func, path, result)
    path.pop()
  }
  return result
}

let result = treeFindPath(tree, node => node.id === '2-1' || node.id === '1-1');
console.log(result);