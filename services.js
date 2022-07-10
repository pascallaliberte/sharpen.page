/* This is a demo file */
(function(){
  document.dispatchEvent(new CustomEvent("service-ladder:ready", { detail: {
    service_ladder: {
  "two_day_discovery_product_rescue": {
    "slug": "two_day_discovery_product_rescue",
    "purchasable_blocks": [
      {
        "price_in_cents": 42500,
        "weeks": [

        ]
      }
    ]
  },
  "review_8_customer_interviews": {
    "slug": "review_8_customer_interviews",
    "purchasable_blocks": [
      {
        "price_in_cents": 129500,
        "weeks": [
          {
            "from_date": "2022-07-11",
            "to_date": "2022-07-15",
            "date_range_as_string": "Jul 11 to 15"
          },
          {
            "from_date": "2022-07-18",
            "to_date": "2022-07-22",
            "date_range_as_string": "Jul 18 to 22"
          }
        ],
        "date_range_as_string": "Jul 11 to 22"
      }
    ]
  },
  "product_coach_3_weeks": {
    "slug": "product_coach_3_weeks",
    "purchasable_blocks": [
      {
        "price_in_cents": 310000,
        "weeks": [
          {
            "from_date": "2022-07-11",
            "to_date": "2022-07-15",
            "date_range_as_string": "Jul 11 to 15"
          },
          {
            "from_date": "2022-07-18",
            "to_date": "2022-07-22",
            "date_range_as_string": "Jul 18 to 22"
          },
          {
            "from_date": "2022-07-25",
            "to_date": "2022-07-29",
            "date_range_as_string": "Jul 25 to 29"
          }
        ],
        "date_range_as_string": "Jul 11 to 29"
      },
      {
        "price_in_cents": 310000,
        "weeks": [
          {
            "from_date": "2022-08-08",
            "to_date": "2022-08-12",
            "date_range_as_string": "Aug  8 to 12"
          },
          {
            "from_date": "2022-08-15",
            "to_date": "2022-08-19",
            "date_range_as_string": "Aug 15 to 19"
          },
          {
            "from_date": "2022-08-22",
            "to_date": "2022-08-26",
            "date_range_as_string": "Aug 22 to 26"
          }
        ],
        "date_range_as_string": "Aug  8 to 26"
      }
    ]
  }
}
  }}))
})();
