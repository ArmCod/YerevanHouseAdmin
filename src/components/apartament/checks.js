import { Checkbox, FormControlLabel } from "@mui/material";
import { useCallback } from "react";

const Checks = ({ type, newUrgent, setNewUrgent, data, setData, newBuilding, newElevator, setNewElevator, setNewBuilding }) => {
    const handleChangeCheck = (e, name) => {

        if (!!e.target.checked) {
            if (!name) {
                if (e.target.name === 'elevator') {
                    setNewElevator(true)
                } else if (e.target.name === 'urgent') {
                    setNewUrgent(true)
                } else {
                    setNewBuilding(true)
                }

                data[e.target.name] = e.target.name

                setData({ ...data })
            } else {
                data[e.target.name] = name
                setData({ ...data })
                if (e.target.name === 'elevator') {
                    setNewElevator(true)
                } else if (e.target.name === 'urgent') {
                    setNewUrgent(true)
                } else {
                    setNewBuilding(true)
                }
            }
        } else {
            if (e.target.name === 'elevator') {
                setNewElevator(false)
            } else if (e.target.name === 'urgent') {
                setNewUrgent(false)
            } else {
                setNewBuilding(false)
            }
            data[e.target.name] = null
            setData({ ...data })
        }

    }

    return (
        <>

            <h4 style={{ margin: '20px 0 0' }}>ՀԱՏԿՈՒԹՅՈՒՆՆԵՐ</h4>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    padding: "5px",
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
                        label={<span style={{ fontSize: 13 }}>Նորակառույց</span>}
                        name="new_building"
                        checked={newBuilding}
                        onChange={(e) => handleChangeCheck(e, "new_building")}
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
                        label={<span style={{ fontSize: 13 }}>Վերելակ</span>}
                        name="elevator"
                        checked={newElevator}
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
                        label={<span style={{ fontSize: 13 }}>Շտապ</span>}
                        name="urgent"
                        checked={newUrgent}
                        onChange={(e) => handleChangeCheck(e, '1')}
                    />
                </div>
            </div>
        </>
    );
}

export default Checks;
