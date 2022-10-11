const { timeParse, utcParse } = require("d3-time-format");

module.exports = data => {
  const
    receivedData = JSON.parse(Object.keys(data)[0]),
    {
      weatherStation: st,
      dateOfdata: dt,
      dataRecordUTC: utc,
      dataCollector: user,
      end,

      minimumTemp: tmn,
      maximumTemp: tmx,
      Temp: t,
      Humidity: rh,
      rainfallType,
      measuredRainfall: p,
      windSpeed: ws,
      windDirection: wd,
      seaPressure: prMsl,
      totalCloud: cldTot,

      moisture_5cm: sm05,
      moisture_10cm: sm10,
      moisture_20cm: sm20,
      moisture_30cm: sm30,
      moisture_50cm: sm50,
      temperature_5cm: st05,
      temperature_10cm: st10,
      temperature_20cm: st20,
      temperature_30cm: st30,
      temperature_50cm: st50
    } = receivedData,

    tm = utcParse("%Y-%m-%d %H%M_UTC")(dt + " " + utc),
    submit = timeParse("%Y-%m-%dT%H:%M:%S.%L %Z")(end.slice(0, 23) + " +06"),
    pType = selection =>
      selection === "noRainfall" ? "n"
        : selection === "measurableRainfall" ? "m" : "t";

  let retunable = { st, tm, submit, user };
  if (tmn) retunable = { ...retunable, tmn };
  if (tmx) retunable = { ...retunable, tmx };
  retunable = { ...retunable, t, rh, pType: pType(rainfallType) };
  if (p) retunable = { ...retunable, p };
  if (ws) retunable = { ...retunable, ws };
  if (wd) retunable = { ...retunable, wd };
  retunable = { ...retunable, prMsl };
  retunable = { ...retunable, cldTot };
  if (sm05) retunable = { ...retunable, sm05 };
  if (sm10) retunable = { ...retunable, sm10 };
  if (sm20) retunable = { ...retunable, sm20 };
  if (sm30) retunable = { ...retunable, sm30 };
  if (sm50) retunable = { ...retunable, sm50 };
  if (st05) retunable = { ...retunable, st05 };
  if (st10) retunable = { ...retunable, st10 };
  if (st20) retunable = { ...retunable, st20 };
  if (st30) retunable = { ...retunable, st30 };
  if (st50) retunable = { ...retunable, st50 };

  return retunable;
}
