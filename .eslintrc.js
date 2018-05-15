module.exports = {
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "rules": {
    "linebreak-style": [
      "error",
      "unix"
    ],
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to" ]
    }],
    "react/forbid-prop-types": 0
  }
};
