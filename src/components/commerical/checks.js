import { Checkbox, FormControlLabel } from "@mui/material";
import { useCallback } from "react";

const Checks = ({ type, data, setData, newUrgent, setNewUrgent, newBuilding, setNewBuilding }) => {

    const handleChangeCheck = useCallback((e, name) => {
        if (!!e.target.checked) {
            if (!name) {

                data[e.target.name] = e.target.name

                setData({ ...data })

                if (e.target.name === 'new_building') {
                    setNewBuilding(true)
                } else {
                    setNewUrgent(true)
                }


            } else {
                data[e.target.name] = name
                setData({ ...data })

                if (e.target.name === 'new_building') {
                    setNewBuilding(true)
                } else {
                    setNewUrgent(true)
                }

            }
        } else {

            if (e.target.name === 'new_building') {
                setNewBuilding(false)
            } else {
                setNewUrgent(false)
            }
            data[e.target.name] = null
            setData({ ...data })
        }

    }, [setData])

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
                        label={<span style={{ fontSize: 13 }}>Շտապ</span>}
                        name="urgent"
                        checked={newUrgent}
                        onChange={(e) => handleChangeCheck(e, "1")}
                    />
                </div>

            </div>
        </>
    );
}

export default Checks;
