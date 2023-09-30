import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useCallback, useState } from "react";

const AllChecks = ({ table, data, setData, type }) => {
  const handleChangeCheck = useCallback(
    (e, name) => {
      if (!!e.target.checked) {
        if (!name) {
          data[e.target.name] = e.target.name;
          setData({ ...data });
        } else {
          data[e.target.name] = name;
          setData({ ...data });
        }
      } else {
        data[e.target.name] = "chka";
        setData({ ...data });
      }
    },
    [setData]
  );

  return (
    <Box>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "30px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2>ՀԱՏԿՈՒԹՅՈՒՆՆԵՐ</h2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Մշտական ջուր</span>}
            name="persistent_water"
            onChange={(e) => handleChangeCheck(e, "Persistent water")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ավտոտնակ</span>}
            name="garage"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Օդորակիչ</span>}
            name="air_conditioner"
            onChange={(e) => handleChangeCheck(e, "Air conditioner")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Մանղալ</span>}
            name="barbeque"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գազ</span>}
            name="natural_gas"
            onChange={(e) => handleChangeCheck(e, "Natural gas")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span style={{ fontSize: 13 }}>Բացօթյա ավտոկայանատեղի</span>
            }
            name="open_air_parking"
            onChange={(e) => handleChangeCheck(e, "Open air parking")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գազի կաթսա</span>}
            name="gas_boiler"
            onChange={(e) => handleChangeCheck(e, "Gas boiler")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>ՈՒնիվերսալ տարածք</span>}
            name="universal_spase"
            onChange={(e) => handleChangeCheck(e, "universal spase")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Եռաֆազ հոսանք</span>}
            name="three_phase_current"
            onChange={(e) => handleChangeCheck(e, "Three-phase current")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span style={{ fontSize: 13 }}>Ստորգետնյա ավտոկայանատեղի</span>
            }
            name="underground_parking"
            onChange={(e) => handleChangeCheck(e, "Underground parking")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Տնտեսական սենյակ</span>}
            name="utility_room"
            onChange={(e) => handleChangeCheck(e, "utility room")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գրասենյակային տարածք</span>}
            name="office_space"
            onChange={(e) => handleChangeCheck(e, "Office space")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ինտերնետ</span>}
            name="internet"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կաբ. TV</span>}
            name="cable_tv"
            onChange={(e) => handleChangeCheck(e, "Cable TV")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ծառայողական սենյակ</span>}
            name="service_room"
            onChange={(e) => handleChangeCheck(e, "service room")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գործող բիզնես</span>}
            name="active_business"
            onChange={(e) => handleChangeCheck(e, "active business")}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Նորակառույց</span>}
            name="new_building"
            onChange={(e) => handleChangeCheck(e, "new_building")}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
            fontSize: 10,
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Արբ․ TV</span>}
            name="satellite_tv"
            onChange={(e) => handleChangeCheck(e, "Satellite TV")}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ձեղնահարկ</span>}
            name="attic"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Առևտրային տարածք</span>}
            name="commercial_space"
            onChange={(e) => handleChangeCheck(e, "Commercial space")}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Պանելային</span>}
            name="panel"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>


        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Անվտանգություն</span>}
            name="security"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Մանսարդ</span>}
            name="attic_room"
            onChange={(e) => handleChangeCheck(e, "attic room")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Հյուրանոց</span>}
            name="hotel"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Քարեշենք</span>}
            name="lets_draw"
            onChange={(e) => handleChangeCheck(e, "Lets_draw")}
          />
        </div>


        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Դոմոֆոն</span>}
            name="intercom"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Նկուղ</span>}
            name="basement"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Հյուրատուն</span>}
            name="guesthouse"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Մոնոլիտ</span>}
            name="monolith"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Մարզասրահ</span>}
            name="gym"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կանաչապատ բակ</span>}
            name="green_yard"
            onChange={(e) => handleChangeCheck(e, "Green Yard")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Արտադրական Տարածք</span>}
            name="manufacturing_area"
            onChange={(e) => handleChangeCheck(e, "Manufacturing area")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Արևկող</span>}
            name="sunny"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Պատշգամբներ</span>}
            name="balconies"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Բակ</span>}
            name="yard"
            onChange={(e) => handleChangeCheck(e, "Yard")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կոմերցիոն տարածք</span>}
            name="commercial_spaces"
            onChange={(e) => handleChangeCheck(e, "commercial spaces")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կապիտալ վերանորոգված</span>}
            name="generally_renovated"
            onChange={(e) => handleChangeCheck(e, "generally renovated")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Բաց պատշգամբ</span>}
            name="open_balcony"
            onChange={(e) => handleChangeCheck(e, "Open balcony")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Թոնիր</span>}
            name="tonir"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Վիտրաժային պատուհաններ</span>}
            name="stained_glass_windows"
            onChange={(e) => handleChangeCheck(e, "stained glass windows")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Մասնակի վերանորոգված</span>}
            name="partially_renovated"
            onChange={(e) => handleChangeCheck(e, "partially renovated")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>2 բաց պատշգամբ</span>}
            name="2_open_balconies"
            onChange={(e) => handleChangeCheck(e, "2 Open balconies")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Բուխարի </span>}
            name="fireplace"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Առաջին գիծ</span>}
            name="first_line"
            onChange={(e) => handleChangeCheck(e, "First line")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>0-ական</span>}
            name="0_pointed"
            onChange={(e) => handleChangeCheck(e, "0-pointed")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>3 բաց պատշգամբ</span>}
            name="3_open_balconies"
            onChange={(e) => handleChangeCheck(e, "3 Open balconies")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Բիլիարդ</span>}
            name="billiard"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Երկրորդ գիծ</span>}
            name="secondary_line"
            onChange={(e) => handleChangeCheck(e, "Secondary line")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գաջված</span>}
            name="plastered"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գեղեցիկ տեսարան</span>}
            name="beautiful_view"
            onChange={(e) => handleChangeCheck(e, "beautiful view")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Սեղանի թենիս</span>}
            name="ping_pong"
            onChange={(e) => handleChangeCheck(e, "Ping pong")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span style={{ fontSize: 13 }}>Բնակելի շին․ համար</span>
            }
            name="for_residential_development"
            onChange={(e) =>
              handleChangeCheck(e, "for residential development")
            }
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Հին վերանորոգում</span>}
            name="old_renovation"
            onChange={(e) => handleChangeCheck(e, "old renovation")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Փակ պատշգամբ</span>}
            name="closed_balcony"
            onChange={(e) => handleChangeCheck(e, "Closed balcony")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ամառային խոհանոց</span>}
            name="summer_kitchen"
            onChange={(e) => handleChangeCheck(e, "Summer kitchen")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գյուղատնտեսական</span>}
            name="agricultural"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span style={{ fontSize: 13 }}>
                Դիզայներական ոճով վերանորոգված
              </span>
            }
            name="designer_style_renovated"
            onChange={(e) => handleChangeCheck(e, "designer style renovated")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>2 փակ պատշգամբ</span>}
            name="2_closed_balconies"
            onChange={(e) => handleChangeCheck(e, "2 closed balconies")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Բացօթյա սրահ</span>}
            name="outdoor_hall"
            onChange={(e) => handleChangeCheck(e, "outdoor hall")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span style={{ fontSize: 13 }}>Արդյունաբերական օգտագործում</span>
            }
            name="for_industrial_use"
            onChange={(e) => handleChangeCheck(e, "For Industrial Use")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Եվրովերանորոգված</span>}
            name="euro_renovated"
            onChange={(e) => handleChangeCheck(e, "Euro-renovated")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Սմարթ</span>}
            name="smart"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Այգի</span>}
            name="garden"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={
              <span style={{ fontSize: 13 }}>
                Հասարակական շին․ համար
              </span>
            }
            name="for_public_buildings"
            onChange={(e) => handleChangeCheck(e, "For Public Buildings")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կոսմետիկ վերանորոգված</span>}
            name="cosmetic_renovated"
            onChange={(e) => handleChangeCheck(e, "Cosmetic renovated")}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ստուդիո</span>}
            name="studio"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Զրուցարան</span>}
            name="arbor"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ընդհանուր օգտագործման</span>}
            name="for_general_purpose"
            onChange={(e) => handleChangeCheck(e, "For General Purpose")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Չբնակեցված</span>}
            name="not_inhabited"
            onChange={(e) => handleChangeCheck(e, "not_inhabited")}
          />
        </div>

        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Դուպլեքս</span>}
            name="duplex"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Տերրասա</span>}
            name="terrace"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Պարսպապատ</span>}
            name="fenced"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կահավորված</span>}
            name="furnished"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Պենթհաուս</span>}
            name="penthouse"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Խաղահրապարակ</span>}
            name="playground"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Կանգառին մոտ</span>}
            name="near_the_bus_stop"
            onChange={(e) => handleChangeCheck(e, "Near the bus stop")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Գույք տեխնիկայով</span>}
            name="property_with_equipment"
            onChange={(e) => handleChangeCheck(e, "Property with equipment")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Երկաթե դուռ</span>}
            name="iron_door"
            onChange={(e) => handleChangeCheck(e, "Iron door")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Լողավազան</span>}
            name="pool"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        {table !== "land" ? (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Վերելակ</span>}
              name="elevator"
              onChange={(e) => handleChangeCheck(e)}
            />
          </div>
        ) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}
        {table === "flat" && type !== 'Sale' ? (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Երեխաներ</span>}
              name="children"
              onChange={(e) => handleChangeCheck(e)}
            />
          </div>
        ) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Եվրո պատուհաններ</span>}
            name="Euro/modern_windows"
            onChange={(e) => handleChangeCheck(e, "Euro/modern windows")}
          />
        </div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Փակ լողավազան</span>}
            name="indoor_swimming_pool"
            onChange={(e) => handleChangeCheck(e, "Indoor swimming pool")}
          />
        </div>
        {table !== "commerical" && table !== "land" && type !== 'Sale' ? (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Հովացում</span>}
              name="cooling"
              onChange={(e) => handleChangeCheck(e)}
            />
          </div>
        ) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        ></div>
        <div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Շատրվան</span>}
            name="fountain"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        {table !== "commerical" && table !== "land" && type !== 'Sale' ? (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          >
            <FormControlLabel
              control={<Checkbox />}
              label={<span style={{ fontSize: 13 }}>Ջեռուցում</span>}
              name="warm"
              onChange={(e) => handleChangeCheck(e)}
            />
          </div>
        ) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}
        {table === 'house' ? (<div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Տուն</span>}
            name="house"
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}
        {table === 'house' ? (<div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Թաունհաուս</span>}
            name="townhouse"
            onChange={(e) => handleChangeCheck(e)}
          />

        </div>) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}
        {table === 'house' ? (<div
          style={{
            width: "200px",
            height: "50px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label={<span style={{ fontSize: 13 }}>Ամառանոց</span>}
            name="country_house"
            onChange={(e) => handleChangeCheck(e, "country house")}
          />
        </div>) : (
          <div
            style={{
              width: "200px",
              height: "50px",
            }}
          ></div>
        )}

        {type !== 'Sale' && <>
          {table !== "land" && table !== "commerical" && type === "Short Term" && (
            <div
              style={{
                width: "200px",
                height: "50px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={<span style={{ fontSize: 13 }}>Խոհանոցի կահույք</span>}
                name="kitchen_furniture"
                onChange={(e) => handleChangeCheck(e, "kitchen furniture")}
              />
            </div>
          )}
          {table !== "land" && table !== "commerical" && type === "Short Term" && (
            <div
              style={{
                width: "200px",
                height: "50px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={<span style={{ fontSize: 13 }}>Տեսախցիկներ</span>}
                name="camera"
                onChange={(e) => handleChangeCheck(e)}
              />
            </div>
          )}
          {table !== "land" && table !== "commerical" && (
            <div
              style={{
                width: "200px",
                height: "50px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={<span style={{ fontSize: 13 }}>Կենդանիներ</span>}
                name="animal"
                onChange={(e) => handleChangeCheck(e)}
              />
            </div>
          )}

          {/* {table === "land" && (
            <div
              style={{
                width: "200px",
                height: "50px",
              }}
            >
              <FormControlLabel
                control={<Checkbox />}
                label={<span style={{ fontSize: 13 }}>Արտադրություն</span>}
                name="production"
                onChange={(e) => handleChangeCheck(e)}
              />
            </div>
          )} */}


          {table !== "land" && (
            <>
              {/* {table === "flat" && (
                <div
                  style={{
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<span style={{ fontSize: 13 }}>Քարե</span>}
                    name="stone"
                    onChange={(e) => handleChangeCheck(e)}
                  />
                </div>
              )} */}
              {/* {table === "flat" && (
                <div
                  style={{
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<span style={{ fontSize: 13 }}>Չվերանորոգված</span>}
                    name="no_renovated"
                    onChange={(e) => handleChangeCheck(e, "no renovated")}
                  />
                </div>
              )} */}
              {table !== "commerical" && (
                <>
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Բացվող բազմոց</span>}
                      name="open_sofa"
                      onChange={(e) => handleChangeCheck(e, "open sofa")}
                    />
                  </div>}
                  {/* <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Պատշգամբ</span>}
                      name="balcon"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div> */}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <span style={{ fontSize: 13 }}>Պատշգամբում կահույք</span>
                      }
                      name="balcone_furniture"
                      onChange={(e) => handleChangeCheck(e, "balcone furniture")}
                    />
                  </div>}
                  {/* <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Տեսք</span>}
                      name="view"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div> */}
                  {type === "For Rent" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Կահույք</span>}
                      name="flat_furniture"
                      onChange={(e) => handleChangeCheck(e, "flat furniture")}
                    />
                  </div>}

                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Մաքրություն</span>}
                      name="clean"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Ավտոկայանատեղի</span>}
                      name="parking"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Ծխել</span>}
                      name="smooke"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Միջոցառումներ կազմակերպել</span>}
                      name="event"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <span style={{ fontSize: 13 }}>Աշխատասեղան</span>
                      }
                      name="work_table"
                      onChange={(e) => handleChangeCheck(e, "work table")}
                    />
                  </div>}
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Գազօջախ</span>}
                      name="gas_stove"
                      onChange={(e) => handleChangeCheck(e, "gas stove")}
                    />
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Սառնարան</span>}
                      name="refrigerator"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Սալօջախ</span>}
                      name="stove"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Լվացքի մեքենա</span>}
                      name="washing_machine"
                      onChange={(e) => handleChangeCheck(e, "washing machine")}
                    />
                  </div>
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Չորանոց</span>}
                      name="dryer"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {/* <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Երկաթ</span>}
                      name="iron"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div> */}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Սպասք</span>}
                      name="dish"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={
                        <span style={{ fontSize: 13 }}>Անկողին</span>
                      }
                      name="bedding"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Սրբիչներ</span>}
                      name="towel"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                  {type === "Short Term" && <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Հիգիենայի պարագաներ</span>}
                      name="hygiene"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>}
                </>
              )}
              {table === "flat" && type === "Short Term" && (
                <div
                  style={{
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<span style={{ fontSize: 13 }}>Բանալիների սեյֆ</span>}
                    name="key_safe"
                    onChange={(e) => handleChangeCheck(e, "key safe")}
                  />
                </div>
              )}
              {table !== "flat" && table !== "commerical" && (
                <>
                  {/* <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Տուն</span>}
                      name="house"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div> */}
                  {/* <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Թաունհաուս</span>}
                      name="townhouse"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div> */}
                  {/* <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Ամառանոց</span>}
                      name="country_house"
                      onChange={(e) => handleChangeCheck(e, "country house")}
                    />
                  </div> */}
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Լողավազան</span>}
                      name="swimming_pool"
                      onChange={(e) => handleChangeCheck(e, "swimming pool")}
                    />
                  </div>

                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Ջակուզի</span>}
                      name="jacuzzi"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Շոգեղբաղնիք</span>}
                      name="sauna"
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Զրուցարան</span>}
                      name="chat_room"
                      onChange={(e) => handleChangeCheck(e, "chat room")}
                    />
                  </div>
                </>
              )}
            </>
          )}
          {table === "commerical" && type === "For Rent" && (
            <>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Առանձին փողոցից</span>}
                  name="from_street"
                  onChange={(e) => handleChangeCheck(e, "from street")}
                />
              </div>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Առանձին բակից</span>}
                  name="from_yard"
                  onChange={(e) => handleChangeCheck(e, "from yard")}
                />
              </div>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Ընդհանուր փողոցից</span>}
                  name="common_street"
                  onChange={(e) => handleChangeCheck(e, "common street")}
                />
              </div>
              <div
                style={{
                  width: "200px",
                  height: "50px",
                }}
              >
                <FormControlLabel
                  control={<Checkbox />}
                  label={<span style={{ fontSize: 13 }}>Ընդհանուր բակից</span>}
                  name="common_yard"
                  onChange={(e) => handleChangeCheck(e, "common yard")}
                />
              </div>
            </>
          )}

        </>}
      </div>
    </Box>
  );
};

export default AllChecks;
