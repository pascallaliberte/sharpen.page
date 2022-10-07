(function(){
  document.dispatchEvent(new CustomEvent("service-ladder:ready", { detail: {
    service_ladder: {
  "two_day_discovery_product_rescue": {
    "endpoint": "http://localhost:3000/checkout_sessions/create",
    "slug": "two_day_discovery_product_rescue",
    "uuid": "efc4cb47-0ea1-4998-b6ac-488e7ded513f",
    "purchasable_blocks": [
      {
        "price_in_cents": 42500,
        "price_in_dollars": "425",
        "weeks": [

        ]
      }
    ]
  },
  "review_8_customer_interviews": {
    "endpoint": "http://localhost:3000/checkout_sessions/create",
    "slug": "review_8_customer_interviews",
    "uuid": "fd066391-71d5-40e3-a4a8-ecb16592c579",
    "purchasable_blocks": [
      {
        "price_in_cents": 129500,
        "price_in_dollars": "1,295",
        "weeks": [
          {
            "from_date": "2022-10-10",
            "to_date": "2022-10-14",
            "date_range_as_string": "Oct 10 to 14"
          },
          {
            "from_date": "2022-10-17",
            "to_date": "2022-10-21",
            "date_range_as_string": "Oct 17 to 21"
          }
        ],
        "date_range_as_string": "Oct 10 to 21"
      }
    ]
  },
  "product_coach_3_weeks": {
    "endpoint": "http://localhost:3000/checkout_sessions/create",
    "slug": "product_coach_3_weeks",
    "uuid": "6539e556-128b-4767-8cf0-33a2801608ea",
    "purchasable_blocks": [
      {
        "price_in_cents": 310000,
        "price_in_dollars": "3,100",
        "weeks": [
          {
            "from_date": "2022-10-10",
            "to_date": "2022-10-14",
            "date_range_as_string": "Oct 10 to 14"
          },
          {
            "from_date": "2022-10-17",
            "to_date": "2022-10-21",
            "date_range_as_string": "Oct 17 to 21"
          },
          {
            "from_date": "2022-10-24",
            "to_date": "2022-10-28",
            "date_range_as_string": "Oct 24 to 28"
          }
        ],
        "date_range_as_string": "Oct 10 to 28"
      },
      {
        "price_in_cents": 310000,
        "price_in_dollars": "3,100",
        "weeks": [
          {
            "from_date": "2022-10-17",
            "to_date": "2022-10-21",
            "date_range_as_string": "Oct 17 to 21"
          },
          {
            "from_date": "2022-10-24",
            "to_date": "2022-10-28",
            "date_range_as_string": "Oct 24 to 28"
          },
          {
            "from_date": "2022-10-31",
            "to_date": "2022-11-04",
            "date_range_as_string": "Oct 31 to Nov  4"
          }
        ],
        "date_range_as_string": "Oct 17 to Nov  4"
      }
    ]
  }
}
  }}))
})();
