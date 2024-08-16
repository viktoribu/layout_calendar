report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_initial_state.png",
        "test": "../bitmaps_test/20240816-201933/Calendar_initial_state.png",
        "selector": "body",
        "fileName": "Calendar_initial_state.png",
        "label": "Calendar initial state",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_day_with_hover_effect.png",
        "test": "../bitmaps_test/20240816-201933/Calendar_day_with_hover_effect.png",
        "selector": "body",
        "fileName": "Calendar_day_with_hover_effect.png",
        "label": "Calendar day with hover effect",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "rawMisMatchPercentage": 1.656341552734375,
          "misMatchPercentage": "1.66",
          "analysisTime": 32
        },
        "diffImage": "../bitmaps_test/20240816-201933/failed_diff_Calendar_day_with_hover_effect.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_starting_from_Wednesday.png",
        "test": "../bitmaps_test/20240816-201933/Calendar_starting_from_Wednesday.png",
        "selector": "body",
        "fileName": "Calendar_starting_from_Wednesday.png",
        "label": "Calendar starting from Wednesday",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "engineErrorMsg": "Waiting for selector `.calendar--start-day-sun` failed: Waiting failed: 30000ms exceeded",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": -792,
            "height": -588
          },
          "rawMisMatchPercentage": 5.2913665771484375,
          "misMatchPercentage": "5.29",
          "analysisTime": 33
        },
        "diffImage": "../bitmaps_test/20240816-201933/failed_diff_Calendar_starting_from_Wednesday.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/Calendar_with_length_of_29_days.png",
        "test": "../bitmaps_test/20240816-201933/Calendar_with_length_of_29_days.png",
        "selector": "body",
        "fileName": "Calendar_with_length_of_29_days.png",
        "label": "Calendar with length of 29 days",
        "requireSameDimensions": false,
        "misMatchThreshold": 0.5,
        "url": "http://localhost:3001/index.html",
        "referenceUrl": "https://mate-academy.github.io/layout_solutions/calendar/",
        "expect": 0,
        "viewportLabel": "tablet_h",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "0.00"
        }
      },
      "status": "pass"
    }
  ]
});