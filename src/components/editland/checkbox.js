import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useCallback, useState } from "react";

const AllChecks = ({ table, data, setData, type }) => {
  const handleChangeCheck = (e, name) => {
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
  };

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
            checked={
              `${data?.persistent_water}`.toLowerCase() ===
              "Persistent water".toLowerCase()
            }
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
            checked={`${data?.garage}`.toLowerCase() === "garage".toLowerCase()}
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
            checked={
              `${data?.air_conditioner}`.toLowerCase() ===
              "Air conditioner".toLowerCase()
            }
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
            checked={
              `${data?.barbeque}`.toLowerCase() === "barbeque".toLowerCase()
            }
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
            checked={
              `${data?.natural_gas}`.toLowerCase() ===
              "Natural gas".toLowerCase()
            }
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
            label={<span style={{ fontSize: 13 }}>Բացօթյա կայանատեղի </span>}
            name="open_air_parking"
            checked={
              `${data?.open_air_parking}`.toLowerCase() ===
              "Open air parking".toLowerCase()
            }
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
            checked={
              `${data?.gas_boiler}`.toLowerCase() === "Gas boiler".toLowerCase()
            }
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
            checked={
              `${data?.universal_spase}`.toLowerCase() ===
              "universal spase".toLowerCase()
            }
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
            checked={
              `${data?.three_phase_current}`.toLowerCase() ===
              "Three-phase current".toLowerCase()
            }
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
            checked={
              `${data?.underground_parking}`.toLowerCase() ===
              "Underground parking".toLowerCase()
            }
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
            checked={
              `${data?.utility_room}`.toLowerCase() ===
              "utility room".toLowerCase()
            }
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
            checked={
              `${data?.office_space}`.toLowerCase() ===
              "Office space".toLowerCase()
            }
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
            checked={
              `${data?.internet}`.toLowerCase() === "internet".toLowerCase()
            }
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
            checked={
              `${data?.cable_tv}`.toLowerCase() === "Cable TV".toLowerCase()
            }
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
            checked={
              `${data?.service_room}`.toLowerCase() ===
              "service room".toLowerCase()
            }
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
            checked={
              `${data?.active_business}`.toLowerCase() ===
              "active business".toLowerCase()
            }
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
            checked={
              `${data?.new_building}`.toLowerCase() ===
              "new_building".toLowerCase()
            }
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
            checked={
              `${data?.satellite_tv}`.toLowerCase() ===
              "Satellite TV".toLowerCase()
            }
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
            checked={`${data?.attic}`.toLowerCase() === "attic".toLowerCase()}
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
            checked={
              `${data?.commercial_space}`.toLowerCase() ===
              "Commercial space".toLowerCase()
            }
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
            checked={`${data?.panel}`.toLowerCase() === "panel".toLowerCase()}
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
            checked={
              `${data?.security}`.toLowerCase() === "security".toLowerCase()
            }
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
            checked={
              `${data?.attic_room}`.toLowerCase() === "attic room".toLowerCase()
            }
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
            checked={`${data?.hotel}`.toLowerCase() === "hotel".toLowerCase()}
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
            checked={
              `${data?.lets_draw}`.toLowerCase() === "Lets_draw".toLowerCase()
            }
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
            checked={
              `${data?.intercom}`.toLowerCase() === "intercom".toLowerCase()
            }
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
            checked={
              `${data?.basement}`.toLowerCase() === "basement".toLowerCase()
            }
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
            checked={
              `${data?.guesthouse}`.toLowerCase() === "guesthouse".toLowerCase()
            }
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
            checked={
              `${data?.monolith}`.toLowerCase() === "monolith".toLowerCase()
            }
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
            checked={`${data?.gym}`.toLowerCase() === "gym".toLowerCase()}
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
            checked={
              `${data?.green_yard}`.toLowerCase() === "Green Yard".toLowerCase()
            }
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
            checked={
              `${data?.manufacturing_area}`.toLowerCase() ===
              "Manufacturing area".toLowerCase()
            }
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
            checked={`${data?.sunny}`.toLowerCase() === "sunny".toLowerCase()}
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
            checked={`${data?.balconies}`.toLowerCase() === "balconies".toLowerCase()}
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
            checked={`${data?.yard}`.toLowerCase() === "Yard".toLowerCase()}
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
            checked={
              `${data?.commercial_spaces}`.toLowerCase() ===
              "commercial spaces".toLowerCase()
            }
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
            checked={
              `${data?.generally_renovated}`.toLowerCase() ===
              "generally renovated".toLowerCase()
            }
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
            checked={
              `${data?.open_balcony}`.toLowerCase() ===
              "Open balcony".toLowerCase()
            }
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
            checked={`${data?.tonir}`.toLowerCase() === "tonir".toLowerCase()}
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
            checked={
              `${data?.stained_glass_windows}`.toLowerCase() ===
              "stained glass windows".toLowerCase()
            }
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
            checked={
              `${data?.partially_renovated}`.toLowerCase() ===
              "partially renovated".toLowerCase()
            }
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
            checked={
              `${data?.["2_open_balconies"]}`.toLowerCase() ===
              "2 Open balconies".toLowerCase()
            }
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
            label={<span style={{ fontSize: 13 }}>Բուխարի</span>}
            name="fireplace"
            checked={
              `${data?.fireplace}`.toLowerCase() === "fireplace".toLowerCase()
            }
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
            checked={
              `${data?.first_line}`.toLowerCase() === "First line".toLowerCase()
            }
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
            checked={
              `${data?.["0_pointed"]}`.toLowerCase() ===
              "0-pointed".toLowerCase()
            }
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
            checked={
              `${data?.["3_open_balconies"]}`.toLowerCase() ===
              "3 Open balconies".toLowerCase()
            }
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
            checked={
              `${data?.billiard}`.toLowerCase() === "billiard".toLowerCase()
            }
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
            checked={
              `${data?.secondary_line}`.toLowerCase() ===
              "Secondary line".toLowerCase()
            }
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
            checked={
              `${data?.plastered}`.toLowerCase() === "plastered".toLowerCase()
            }
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
            checked={
              `${data?.beautiful_view}`.toLowerCase() ===
              "beautiful view".toLowerCase()
            }
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
            checked={
              `${data?.ping_pong}`.toLowerCase() === "Ping pong".toLowerCase()
            }
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
            checked={
              `${data?.for_residential_development}`.toLowerCase() ===
              "for residential development".toLowerCase()
            }
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
            checked={
              `${data?.old_renovation}`.toLowerCase() ===
              "old renovation".toLowerCase()
            }
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
            checked={
              `${data?.closed_balcony}`.toLowerCase() ===
              "Closed balcony".toLowerCase()
            }
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
            checked={
              `${data?.summer_kitchen}`.toLowerCase() ===
              "Summer kitchen".toLowerCase()
            }
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
            checked={
              `${data?.agricultural}`.toLowerCase() ===
              "agricultural".toLowerCase()
            }
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
            checked={
              `${data?.designer_style_renovated}`.toLowerCase() ===
              "designer style renovated".toLowerCase()
            }
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
            checked={
              `${data?.["2_closed_balconies"]}`.toLowerCase() ===
              "2 closed balconies".toLowerCase()
            }
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
            checked={
              `${data?.outdoor_hall}`.toLowerCase() ===
              "outdoor hall".toLowerCase()
            }
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
            checked={
              `${data?.for_industrial_use}`.toLowerCase() ===
              "for industrial use".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "for industrial use")}
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
            checked={
              `${data?.euro_renovated}`.toLowerCase() ===
              "Euro-renovated".toLowerCase()
            }
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
            checked={`${data?.smart}`.toLowerCase() === "smart".toLowerCase()}
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
            checked={`${data?.garden}`.toLowerCase() === "garden".toLowerCase()}
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
            checked={
              `${data?.for_public_buildings}`.toLowerCase() ===
              "for public buildings".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "for public buildings")}
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
            checked={
              `${data?.cosmetic_renovated}`.toLowerCase() ===
              "cosmetic renovated".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "cosmetic renovated")}
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
            checked={
              `${data?.studio}`.toLowerCase() === "studio".toLowerCase()
            }
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
            checked={`${data?.arbor}`.toLowerCase() === "arbor".toLowerCase()}
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
            checked={
              `${data?.for_general_purpose}`.toLowerCase() ===
              "for general purpose".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "for general purpose")}
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
            checked={
              `${data?.not_inhabited}`.toLowerCase() ===
              "not_inhabited".toLowerCase()
            }
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
            checked={`${data?.duplex}`.toLowerCase() === "duplex".toLowerCase()}
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
            checked={
              `${data?.terrace}`.toLowerCase() === "terrace".toLowerCase()
            }
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
            checked={`${data?.fenced}`.toLowerCase() === "fenced".toLowerCase()}
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
            checked={
              `${data?.furnished}`.toLowerCase() === "furnished".toLowerCase()
            }
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
            checked={
              `${data?.penthouse}`.toLowerCase() === "penthouse".toLowerCase()
            }
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
            checked={
              `${data?.playground}`.toLowerCase() === "playground".toLowerCase()
            }
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
            checked={
              `${data?.near_the_bus_stop}`.toLowerCase() ===
              "near the bus stop".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "near the bus stop")}
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
            checked={
              `${data?.property_with_equipment}`.toLowerCase() ===
              "property with equipment".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "property with equipment")}
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
            checked={
              `${data?.iron_door}`.toLowerCase() === "Iron door".toLowerCase()
            }
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
            checked={`${data?.pool}`.toLowerCase() === "pool".toLowerCase()}
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
              checked={
                `${data?.elevator}`.toLowerCase() === "elevator".toLowerCase()
              }
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

        {table === "flat" && type !== "Sale" ? (
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
              checked={
                `${data?.children}`.toLowerCase() === "children".toLowerCase()
              }
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
            checked={
              `${data?.["Euro/modern_windows"]}`.toLowerCase() ===
              "Euro/modern windows".toLowerCase()
            }
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
            checked={
              `${data?.indoor_swimming_pool}`.toLowerCase() ===
              "indoor swimming pool".toLowerCase()
            }
            onChange={(e) => handleChangeCheck(e, "indoor swimming pool")}
          />
        </div>

        {table !== "commerical" && table !== "land" && type !== "Sale" ? (
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
              checked={
                `${data?.cooling}`.toLowerCase() === "cooling".toLowerCase()
              }
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
            checked={`${data?.fountain}`.toLowerCase() === "fountain".toLowerCase()}
            onChange={(e) => handleChangeCheck(e)}
          />
        </div>
        {table !== "commerical" && table !== "land" && type !== "Sale" ? (
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
              checked={`${data?.warm}`.toLowerCase() === "warm".toLowerCase()}
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

        {/* <>
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
              checked={
                `${data?.swimming_pool}`.toLowerCase() ===
                "swimming pool".toLowerCase()
              }
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
              label={<span style={{ fontSize: 13 }}>Շատրվան</span>}
              name="fountain"
              checked={
                `${data?.fountain}`.toLowerCase() === "fountain".toLowerCase()
              }
              onChange={(e) => handleChangeCheck(e)}
            />
          </div>

          {table !== "land" && table !== "commerical" ? (
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
                checked={
                  `${data?.kitchen_furniture}`.toLowerCase() ===
                  "kitchen furniture".toLowerCase()
                }
                onChange={(e) => handleChangeCheck(e, "kitchen furniture")}
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
          {table !== "land" && table !== "commerical" ? (
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
                checked={
                  `${data?.camera}`.toLowerCase() === "camera".toLowerCase()
                }
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
                checked={
                  `${data?.animal}`.toLowerCase() === "animal".toLowerCase()
                }
                onChange={(e) => handleChangeCheck(e)}
              />
            </div>
          )}
          {table === "land" && (
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
                checked={
                  `${data?.production}`.toLowerCase() ===
                  "production".toLowerCase()
                }
                onChange={(e) => handleChangeCheck(e)}
              />
            </div>
          )}
          {table !== "land" && (
            <>
              {table === "flat" && (
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
                    checked={
                      `${data?.stone}`.toLowerCase() === "stone".toLowerCase()
                    }
                    onChange={(e) => handleChangeCheck(e)}
                  />
                </div>
              )}
              {table === "flat" && (
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
                    checked={
                      `${data?.no_renovated}`.toLowerCase() ===
                      "no renovated".toLowerCase()
                    }
                    onChange={(e) => handleChangeCheck(e, "no renovated")}
                  />
                </div>
              )}
              {table === "flat" && (
                <div
                  style={{
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span style={{ fontSize: 13 }}>Հին վերանորոգված</span>
                    }
                    name="old_renovated"
                    checked={
                      `${data?.old_renovated}`.toLowerCase() ===
                      "old renovated".toLowerCase()
                    }
                    onChange={(e) => handleChangeCheck(e, "old renovated")}
                  />
                </div>
              )}
              {table !== "commerical" && (
                <>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Մեկ մահճակալ</span>}
                      name="one_bed"
                      onChange={(e) => handleChangeCheck(e, "one bed")}
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
                        <span style={{ fontSize: 13 }}>Երկու մահճակալ</span>
                      }
                      name="two_bed"
                      onChange={(e) => handleChangeCheck(e, "two bed")}
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
                      label={<span style={{ fontSize: 13 }}>Բաց բազմոց</span>}
                      name="open_sofa"
                      checked={
                        `${data?.open_sofa}`.toLowerCase() ===
                        "open sofa".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e, "open sofa")}
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
                      label={<span style={{ fontSize: 13 }}>Պատշգամբ</span>}
                      name="balcon"
                      checked={
                        `${data?.balcon}`.toLowerCase() ===
                        "balcon".toLowerCase()
                      }
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
                        <span style={{ fontSize: 13 }}>Պատշգամբի կահույք</span>
                      }
                      name="balcone_furniture"
                      checked={
                        `${data?.balcone_furniture}`.toLowerCase() ===
                        "balcone furniture".toLowerCase()
                      }
                      onChange={(e) =>
                        handleChangeCheck(e, "balcone furniture")
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
                      label={<span style={{ fontSize: 13 }}>Տեսք</span>}
                      name="view"
                      checked={
                        `${data?.view}`.toLowerCase() === "view".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Հարթ կահույք</span>}
                      name="flat_furniture"
                      checked={
                        `${data?.flat_furniture}`.toLowerCase() ===
                        "flat furniture".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e, "flat furniture")}
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
                      label={<span style={{ fontSize: 13 }}>Մաքուր</span>}
                      name="clean"
                      checked={
                        `${data?.clean}`.toLowerCase() === "clean".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Կայանատեղի</span>}
                      name="parking"
                      checked={
                        `${data?.parking}`.toLowerCase() ===
                        "parking".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Ծխել</span>}
                      name="smooke"
                      checked={
                        `${data?.smooke}`.toLowerCase() ===
                        "smooke".toLowerCase()
                      }
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
                        <span style={{ fontSize: 13 }}>Իրադարձություն</span>
                      }
                      name="event"
                      checked={
                        `${data?.event}`.toLowerCase() === "event".toLowerCase()
                      }
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
                        <span style={{ fontSize: 13 }}>Աշխատանքային սեղան</span>
                      }
                      name="work_table"
                      checked={
                        `${data?.work_table}`.toLowerCase() ===
                        "work table".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e, "work table")}
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
                      label={<span style={{ fontSize: 13 }}>Գազի վառարան</span>}
                      name="gas_stove"
                      checked={
                        `${data?.gas_stove}`.toLowerCase() ===
                        "gas stove".toLowerCase()
                      }
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
                      checked={
                        `${data?.refrigerator}`.toLowerCase() ===
                        "refrigerator".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Վառարան</span>}
                      name="stove"
                      checked={
                        `${data?.stove}`.toLowerCase() === "stove".toLowerCase()
                      }
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
                        <span style={{ fontSize: 13 }}>Լվացքի մեքենա</span>
                      }
                      name="washing_machine"
                      checked={
                        `${data?.washing_machine}`.toLowerCase() ===
                        "washing machine".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e, "washing machine")}
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
                      label={<span style={{ fontSize: 13 }}>Չորանոց</span>}
                      name="dryer"
                      checked={
                        `${data?.dryer}`.toLowerCase() === "dryer".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Երկաթ</span>}
                      name="iron"
                      checked={
                        `${data?.iron}`.toLowerCase() === "iron".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Սպասք</span>}
                      name="dish"
                      checked={
                        `${data?.dish}`.toLowerCase() === "dish".toLowerCase()
                      }
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
                          Անկողնային պարագաներ
                        </span>
                      }
                      name="bedding"
                      checked={
                        `${data?.bedding}`.toLowerCase() ===
                        "bedding".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Սրբիչ</span>}
                      name="towel"
                      checked={
                        `${data?.towel}`.toLowerCase() === "towel".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Հիգիենա</span>}
                      name="hygiene"
                      checked={
                        `${data?.hygiene}`.toLowerCase() ===
                        "hygiene".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e)}
                    />
                  </div>
                </>
              )}
              {table === "flat" && (
                <div
                  style={{
                    width: "200px",
                    height: "50px",
                  }}
                >
                  <FormControlLabel
                    control={<Checkbox />}
                    label={
                      <span style={{ fontSize: 13 }}>Բանալիների սեյֆ</span>
                    }
                    name="key_safe"
                    checked={
                      `${data?.key_safe}`.toLowerCase() ===
                      "key safe".toLowerCase()
                    }
                    onChange={(e) => handleChangeCheck(e, "key safe")}
                  />
                </div>
              )}
              {table !== "flat" && table !== "commerical" && (
                <>
                  <div
                    style={{
                      width: "200px",
                      height: "50px",
                    }}
                  >
                    <FormControlLabel
                      control={<Checkbox />}
                      label={<span style={{ fontSize: 13 }}>Տուն</span>}
                      name="house"
                      checked={
                        `${data?.house}`.toLowerCase() === "house".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Թաունհաուս</span>}
                      name="townhouse"
                      checked={
                        `${data?.townhouse}`.toLowerCase() ===
                        "townhouse".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Ամառանոց</span>}
                      name="country_house"
                      checked={
                        `${data?.country_house}`.toLowerCase() ===
                        "country house".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e, "country house")}
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
                      checked={
                        `${data?.jacuzzi}`.toLowerCase() ===
                        "jacuzzi".toLowerCase()
                      }
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
                      label={<span style={{ fontSize: 13 }}>Սաունա</span>}
                      name="sauna"
                      checked={
                        `${data?.sauna}`.toLowerCase() === "sauna".toLowerCase()
                      }
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
                      checked={
                        `${data?.chat_room}`.toLowerCase() ===
                        "chat room".toLowerCase()
                      }
                      onChange={(e) => handleChangeCheck(e, "chat room")}
                    />
                  </div>
                </>
              )}
            </>
          )}
          {table === "commerical" && (
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
                  checked={
                    `${data?.from_street}`.toLowerCase() ===
                    "from street".toLowerCase()
                  }
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
                  checked={
                    `${data?.from_yard}`.toLowerCase() ===
                    "from yard".toLowerCase()
                  }
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
                  label={
                    <span style={{ fontSize: 13 }}>Ընդհանուր փողոցից</span>
                  }
                  name="common_street"
                  checked={
                    `${data?.common_street}`.toLowerCase() ===
                    "common street".toLowerCase()
                  }
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
                  checked={
                    `${data?.common_yard}`.toLowerCase() ===
                    "common yard".toLowerCase()
                  }
                  onChange={(e) => handleChangeCheck(e, "common yard")}
                />
              </div>
            </>
          )}
        </> */}
      </div>
    </Box>
  );
};

export default AllChecks;
