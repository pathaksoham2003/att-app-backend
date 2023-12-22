const db = require("../database");

const getLocations = async (req, res) => {
  db.query(`SELECT * FROM ATT_LOCATION`, [], (err, result) => {
    if (err) {
      res.status(400).json({ message: "Error quering the database" });
    }
    res.status(200).json(result.rows);
  });
};
/*
OFFICE IS 2 KM AWAY RANGE IS 3
{
    "location_id": "927727065429770241",
    "latitude": 19.91069,
    "longitude": 75.3526956,
    "place": "Aurangabad 1",
    "range": "3"
  }
*/
/*
OFFICE IS 4 KM AWAY RANGE IS 2KM
{
    "location_id": "927727065429770241",
    "latitude": 19.9181382,
    "longitude": 75.3797506,
    "place": "Aurangabad 2",
    "range": "2"
  }
*/
/*
OFFICE IS 1 KM AWAY RANGE IS 0.5KM
{
    "location_id": "927727065429770241",
    "latitude": 19.8837103,
    "longitude": 75.3526956,
    "place": "Aurangabad 1",
    "range": "0.5"
  }
*/

const createLocation = (req, res) => {
  const { place, longitude, latitude, range } = req.body;
  const rangeInMeters = range * 1000;
  db.query(
    `INSERT INTO ATT_LOCATION (place,latitude,longitude,range) VALUES ($1,$2,$3,$4) RETURNING *`,
    [place, latitude, longitude, rangeInMeters],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Error Quering the database" });
      }
      return res.status(200).json(result.rows);
    }
  );
};

const deleteLocation = (req, res) => {
  const { location_id } = req.params;
  db.query(
    `DELETE FROM ATT_LOCATION WHERE location_id = $1`,
    [location_id],
    (err, result) => {
      if (err) {
        return res.status(400).json({ message: "Error Quering the database" });
      }
      return res.status(200).json("Deleted");
    }
  );
};

module.exports = { getLocations, createLocation, deleteLocation };
