export interface Attribute {
  attribute_id: number
  value_id: number
  parent_attribute_id: number
  parent_value_id: number
  status: number
  mandatory: boolean
  name: string
  display_name: string
  value_type: number
  children?: Attribute[]
  attribute_info: AttributeInfo
  attribute_model_id: number
  multi_lang: MultiLang[]
}

export interface AttributeInfo {
  input_type: number
  input_validation_type: number
  format_type: number
  date_format_type: number
  is_ncc: boolean
  is_local_gov: boolean
  mandatory_region: unknown[]
  max_value_count: number
  is_isbn: boolean
  is_anatel: boolean
  is_bsmi: boolean
  attribute_unit_list?: string[]
}

export interface MultiLang {
  language: string
  value: string
}

export const attributes: Attribute[] = [
    {
        "attribute_id": 100010,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": true,
        "name": "Shelf Life",
        "display_name": "Masa Penyimpanan",
        "value_type": 2,
        "children": [
            {
                "attribute_id": 0,
                "value_id": 563,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "1 Month",
                "display_name": "1 Bulan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "1 Month"
                    },
                    {
                        "language": "id",
                        "value": "1 Bulan"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 568,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "2 Months",
                "display_name": "2 Bulan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "2 Months"
                    },
                    {
                        "language": "id",
                        "value": "2 Bulan"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 574,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "3 Months",
                "display_name": "3 Bulan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "3 Months"
                    },
                    {
                        "language": "id",
                        "value": "3 Bulan"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 580,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "6 Months",
                "display_name": "6 Bulan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "6 Months"
                    },
                    {
                        "language": "id",
                        "value": "6 Bulan"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 593,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "12 Months",
                "display_name": "12 Bulan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "12 Months"
                    },
                    {
                        "language": "id",
                        "value": "12 Bulan"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 605,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "24 Months",
                "display_name": "24 Bulan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "24 Months"
                    },
                    {
                        "language": "id",
                        "value": "24 Bulan"
                    }
                ]
            }
        ],
        "attribute_info": {
            "input_type": 2,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Shelf Life"
            },
            {
                "language": "id",
                "value": "Masa Penyimpanan"
            }
        ]
    },
    {
        "attribute_id": 100037,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Region of Origin",
        "display_name": "Negara Asal",
        "value_type": 2,
        "children": [
            {
                "attribute_id": 0,
                "value_id": 142,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "England",
                "display_name": "Inggris",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "England"
                    },
                    {
                        "language": "id",
                        "value": "Inggris"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 60,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Europe",
                "display_name": "Eropa",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Europe"
                    },
                    {
                        "language": "id",
                        "value": "Eropa"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 68,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Indonesia",
                "display_name": "Indonesia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Indonesia"
                    },
                    {
                        "language": "id",
                        "value": "Indonesia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 48,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Korea",
                "display_name": "Korea",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Korea"
                    },
                    {
                        "language": "id",
                        "value": "Korea"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 74,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Malaysia",
                "display_name": "Malaysia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Malaysia"
                    },
                    {
                        "language": "id",
                        "value": "Malaysia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 104,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Philippines",
                "display_name": "Filipina",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Philippines"
                    },
                    {
                        "language": "id",
                        "value": "Filipina"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 108,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Singapore",
                "display_name": "Singapura",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Singapore"
                    },
                    {
                        "language": "id",
                        "value": "Singapura"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 112,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Taiwan",
                "display_name": "Taiwan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Taiwan"
                    },
                    {
                        "language": "id",
                        "value": "Taiwan"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 35,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Mainland China",
                "display_name": "China",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "China"
                    },
                    {
                        "language": "id",
                        "value": "China"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 93,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Others",
                "display_name": "Lainnya",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Others"
                    },
                    {
                        "language": "id",
                        "value": "Lainnya"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 1,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Japan",
                "display_name": "Jepang",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Japan"
                    },
                    {
                        "language": "id",
                        "value": "Jepang"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 129,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Thailand",
                "display_name": "Thailand",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Thailand"
                    },
                    {
                        "language": "id",
                        "value": "Thailand"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 136,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Vietnam",
                "display_name": "Vietnam",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Vietnam"
                    },
                    {
                        "language": "id",
                        "value": "Vietnam"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 177,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Canada",
                "display_name": "Kanada",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Canada"
                    },
                    {
                        "language": "id",
                        "value": "Kanada"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 169,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Sweden",
                "display_name": "Swedia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Sweden"
                    },
                    {
                        "language": "id",
                        "value": "Swedia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 167,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "UK",
                "display_name": "Inggris",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "UK"
                    },
                    {
                        "language": "id",
                        "value": "Inggris"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 165,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Norway",
                "display_name": "Norwegia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Norway"
                    },
                    {
                        "language": "id",
                        "value": "Norwegia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 163,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "New Zealand",
                "display_name": "Selandia Baru",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "New Zealand"
                    },
                    {
                        "language": "id",
                        "value": "Selandia Baru"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 160,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Netherlands",
                "display_name": "Belanda",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Netherlands"
                    },
                    {
                        "language": "id",
                        "value": "Belanda"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 158,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Italy",
                "display_name": "Italia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Italy"
                    },
                    {
                        "language": "id",
                        "value": "Italia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 156,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Hong Kong",
                "display_name": "Hong Kong",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Hong Kong"
                    },
                    {
                        "language": "id",
                        "value": "Hong Kong"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 154,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "India",
                "display_name": "India",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "India"
                    },
                    {
                        "language": "id",
                        "value": "India"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 151,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Denmark",
                "display_name": "Denmark",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Denmark"
                    },
                    {
                        "language": "id",
                        "value": "Denmark"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 149,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Germany",
                "display_name": "Jerman",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Germany"
                    },
                    {
                        "language": "id",
                        "value": "Jerman"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 146,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "France",
                "display_name": "Prancis",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "France"
                    },
                    {
                        "language": "id",
                        "value": "Prancis"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 110,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "America",
                "display_name": "Amerika",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "America"
                    },
                    {
                        "language": "id",
                        "value": "Amerika"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 26,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Australia",
                "display_name": "Australia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Australia"
                    },
                    {
                        "language": "id",
                        "value": "Australia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6737,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Brasil",
                "display_name": "Brasil",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Brasil"
                    },
                    {
                        "language": "en",
                        "value": "Brasil"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6738,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Colombia",
                "display_name": "Colombia",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Colombia"
                    },
                    {
                        "language": "en",
                        "value": "Colombia"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6739,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Chile",
                "display_name": "Chile",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Chile"
                    },
                    {
                        "language": "en",
                        "value": "Chile"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6740,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Argentina",
                "display_name": "Argentina",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Argentina"
                    },
                    {
                        "language": "id",
                        "value": "Argentina"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6741,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Mexico",
                "display_name": "Mexico",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Mexico"
                    },
                    {
                        "language": "en",
                        "value": "Mexico"
                    }
                ]
            }
        ],
        "attribute_info": {
            "input_type": 2,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Country of Origin"
            },
            {
                "language": "id",
                "value": "Negara Asal"
            }
        ]
    },
    {
        "attribute_id": 100061,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Expiry Date",
        "display_name": "Tanggal Kedaluwarsa",
        "value_type": 2,
        "children": [],
        "attribute_info": {
            "input_type": 3,
            "input_validation_type": 4,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Expiry Date"
            },
            {
                "language": "id",
                "value": "Tanggal Kedaluwarsa"
            }
        ]
    },
    {
        "attribute_id": 100974,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Ingredient",
        "display_name": "Ingredient",
        "value_type": 2,
        "children": [],
        "attribute_info": {
            "input_type": 3,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Ingredient"
            }
        ]
    },
    {
        "attribute_id": 101029,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Pack Size",
        "display_name": "Ukuran Per Produk",
        "value_type": 2,
        "children": [],
        "attribute_info": {
            "input_type": 3,
            "input_validation_type": 3,
            "format_type": 2,
            "date_format_type": 0,
            "attribute_unit_list": [
                "ML",
                "L",
                "MG",
                "G/GR",
                "KG",
                "CM",
                "M",
                "Dozen",
                "Piece",
                "Pack",
                "Set",
                "Box"
            ],
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Pack Size"
            },
            {
                "language": "id",
                "value": "Ukuran Per Produk"
            }
        ]
    },
    {
        "attribute_id": 100095,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Weight",
        "display_name": "Berat Produk",
        "value_type": 2,
        "children": [
            {
                "attribute_id": 0,
                "value_id": 515,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "10g",
                "display_name": "10g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "10g"
                    },
                    {
                        "language": "id",
                        "value": "10g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 523,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "20g",
                "display_name": "20g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "20g"
                    },
                    {
                        "language": "id",
                        "value": "20g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 545,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "30g",
                "display_name": "30g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "30g"
                    },
                    {
                        "language": "id",
                        "value": "30g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 556,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "50g",
                "display_name": "50g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "50g"
                    },
                    {
                        "language": "id",
                        "value": "50g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 551,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "100g",
                "display_name": "100g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "100g"
                    },
                    {
                        "language": "id",
                        "value": "100g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 562,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "150g",
                "display_name": "150g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "150g"
                    },
                    {
                        "language": "id",
                        "value": "150g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 578,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "200g",
                "display_name": "200g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "200g"
                    },
                    {
                        "language": "id",
                        "value": "200g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 586,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "250g",
                "display_name": "250g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "250g"
                    },
                    {
                        "language": "id",
                        "value": "250g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 599,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "300g",
                "display_name": "300g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "300g"
                    },
                    {
                        "language": "id",
                        "value": "300g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 613,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "500g",
                "display_name": "500g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "500g"
                    },
                    {
                        "language": "id",
                        "value": "500g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 622,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "750g",
                "display_name": "750g",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "750g"
                    },
                    {
                        "language": "id",
                        "value": "750g"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 631,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "1kg",
                "display_name": "1kg",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "1kg"
                    },
                    {
                        "language": "id",
                        "value": "1kg"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 640,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "1.5kg",
                "display_name": "1.5kg",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "1.5kg"
                    },
                    {
                        "language": "id",
                        "value": "1.5kg"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 646,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "2kg",
                "display_name": "2kg",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "2kg"
                    },
                    {
                        "language": "id",
                        "value": "2kg"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 653,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "3kg",
                "display_name": "3kg",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "3kg"
                    },
                    {
                        "language": "id",
                        "value": "3kg"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 663,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "5kg",
                "display_name": "5kg",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "5kg"
                    },
                    {
                        "language": "id",
                        "value": "5kg"
                    }
                ]
            }
        ],
        "attribute_info": {
            "input_type": 2,
            "input_validation_type": 3,
            "format_type": 2,
            "date_format_type": 0,
            "attribute_unit_list": [
                "g",
                "kg"
            ],
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Weight"
            },
            {
                "language": "id",
                "value": "Berat Produk"
            }
        ]
    },
    {
        "attribute_id": 100009,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Specialty Diet",
        "display_name": "Menu Makanan Khusus",
        "value_type": 2,
        "children": [
            {
                "attribute_id": 0,
                "value_id": 437,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Caffeine Free",
                "display_name": "Bebas Kafein",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Caffeine Free"
                    },
                    {
                        "language": "id",
                        "value": "Bebas Kafein"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 428,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Cholesterol Free",
                "display_name": "Bebas Kolesterol",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Cholesterol Free"
                    },
                    {
                        "language": "id",
                        "value": "Bebas Kolesterol"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 444,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Gluten Free",
                "display_name": "Gluten Free",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Gluten Free"
                    },
                    {
                        "language": "id",
                        "value": "Gluten Free"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 451,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "GMO Free",
                "display_name": "Non Rekayasa Genetika (Non-GMO)",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "GMO Free"
                    },
                    {
                        "language": "id",
                        "value": "Non Rekayasa Genetika (Non-GMO)"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 459,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Halal",
                "display_name": "Halal",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Halal"
                    },
                    {
                        "language": "id",
                        "value": "Halal"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 465,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Healthier Choice",
                "display_name": "Menu Sehat",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Healthier Choice"
                    },
                    {
                        "language": "id",
                        "value": "Menu Sehat"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 470,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Lactose Free",
                "display_name": "Bebas Laktosa",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Lactose Free"
                    },
                    {
                        "language": "id",
                        "value": "Bebas Laktosa"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 475,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Low Fat",
                "display_name": "Rendah Lemak",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Low Fat"
                    },
                    {
                        "language": "id",
                        "value": "Rendah Lemak"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 485,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Low Sodium",
                "display_name": "Rendah Sodium",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Low Sodium"
                    },
                    {
                        "language": "id",
                        "value": "Rendah Sodium"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 495,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Low Sugar",
                "display_name": "Rendah Gula",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Low Sugar"
                    },
                    {
                        "language": "id",
                        "value": "Rendah Gula"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 501,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Sugar Free",
                "display_name": "Bebas Gula",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Sugar Free"
                    },
                    {
                        "language": "id",
                        "value": "Bebas Gula"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 505,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Trans Fat Free",
                "display_name": "Bebas Lemak Trans",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Trans Fat Free"
                    },
                    {
                        "language": "id",
                        "value": "Bebas Lemak Trans"
                    }
                ]
            }
        ],
        "attribute_info": {
            "input_type": 5,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Specialty Diet"
            },
            {
                "language": "id",
                "value": "Menu Makanan Khusus"
            }
        ]
    },
    {
        "attribute_id": 101050,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Storage Condition",
        "display_name": "Kondisi Penyimpanan",
        "value_type": 2,
        "children": [
            {
                "attribute_id": 0,
                "value_id": 6235,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Deep Frozen",
                "display_name": "Sangat Beku (di bawah -15°C)",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Sangat Beku (di bawah -15°C)"
                    },
                    {
                        "language": "en",
                        "value": "Deep Frozen"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6234,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Frozen",
                "display_name": "Beku (-15°C - 0°C)",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Beku (-15°C - 0°C)"
                    },
                    {
                        "language": "en",
                        "value": "Frozen"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6232,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Air Conditioned",
                "display_name": "Ruangan Ber-AC",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Ruangan Ber-AC"
                    },
                    {
                        "language": "en",
                        "value": "Air Conditioned"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6233,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Chilled",
                "display_name": "Lemari Pendingin (0°C - 10°C)",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Lemari Pendingin (0°C - 10°C)"
                    },
                    {
                        "language": "en",
                        "value": "Chilled"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 6231,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Normal",
                "display_name": "Suhu Ruangan",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "id",
                        "value": "Suhu Ruangan"
                    },
                    {
                        "language": "en",
                        "value": "Room Temperature"
                    }
                ]
            }
        ],
        "attribute_info": {
            "input_type": 1,
            "input_validation_type": 0,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "id",
                "value": "Kondisi Penyimpanan"
            },
            {
                "language": "en",
                "value": "Storage Conditions"
            }
        ]
    },
    {
        "attribute_id": 100999,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Quantity",
        "display_name": "Jumlah Produk Dalam Kemasan",
        "value_type": 2,
        "children": [],
        "attribute_info": {
            "input_type": 3,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Quantity"
            },
            {
                "language": "id",
                "value": "Jumlah Produk Dalam Kemasan"
            }
        ]
    },
    {
        "attribute_id": 100963,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "FDA Registration No.",
        "display_name": "No. Izin Edar (BPOM, lainnya)",
        "value_type": 2,
        "children": [],
        "attribute_info": {
            "input_type": 3,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Official Distribution Authorization No."
            },
            {
                "language": "id",
                "value": "No. Izin Edar (BPOM, lainnya)"
            }
        ]
    },
    {
        "attribute_id": 100251,
        "value_id": 0,
        "parent_attribute_id": 0,
        "parent_value_id": 0,
        "status": 0,
        "mandatory": false,
        "name": "Dietary Needs",
        "display_name": "Kebutuhan Diet",
        "value_type": 2,
        "children": [
            {
                "attribute_id": 0,
                "value_id": 56,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Halal",
                "display_name": "Halal",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Halal"
                    },
                    {
                        "language": "id",
                        "value": "Halal"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 83,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Organic",
                "display_name": "Organik",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Organic"
                    },
                    {
                        "language": "id",
                        "value": "Organik"
                    }
                ]
            },
            {
                "attribute_id": 0,
                "value_id": 63,
                "parent_attribute_id": 0,
                "parent_value_id": 0,
                "status": 0,
                "mandatory": false,
                "name": "Others",
                "display_name": "Lainnya",
                "value_type": 3,
                "children": [],
                "attribute_info": {
                    "input_type": 0,
                    "input_validation_type": 0,
                    "format_type": 0,
                    "date_format_type": 0,
                    "is_ncc": false,
                    "is_local_gov": false,
                    "mandatory_region": [],
                    "max_value_count": 0,
                    "is_isbn": false,
                    "is_anatel": false,
                    "is_bsmi": false
                },
                "attribute_model_id": 0,
                "multi_lang": [
                    {
                        "language": "en",
                        "value": "Others"
                    },
                    {
                        "language": "id",
                        "value": "Lainnya"
                    }
                ]
            }
        ],
        "attribute_info": {
            "input_type": 5,
            "input_validation_type": 2,
            "format_type": 1,
            "date_format_type": 0,
            "is_ncc": false,
            "is_local_gov": false,
            "mandatory_region": [],
            "max_value_count": 5,
            "is_isbn": false,
            "is_anatel": false,
            "is_bsmi": false
        },
        "attribute_model_id": 0,
        "multi_lang": [
            {
                "language": "en",
                "value": "Dietary Needs"
            },
            {
                "language": "id",
                "value": "Kebutuhan Diet"
            }
        ]
    }
]
