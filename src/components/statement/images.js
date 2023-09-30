import { Box } from "@mui/material";
import { useState } from "react";
import { ConvertMultiple } from "../../utils/helpers/base64";


const AllImages = ({ convert, setConvert, images, setImages }) => {


    const fileSelectedHandler = async (e) => {
        setConvert([])
        let k = 0;
        const newFiles = Array.from(e.target.files).map((file, index) => ({
            file,
            index,
        }));
        setImages(newFiles)

        for (let i = 0; e.target.files.length; i++) {
            const image2 = await ConvertMultiple(e.target.files[i]);
            setConvert(prev => [...prev, image2])
        }
    }

    const handleImageDelete = async (k) => {
        convert.splice(k, 1)
        setConvert([...convert])
        const newImg = images.filter((file) => file.index !== k)
        for (let i = 0; i < newImg.length; i++) {
            newImg[i].index = i
        }
        setImages(newImg);
    }

    const handleImageEdit = async (event, k) => {

        images[k].file = event.target.files[0]
        setImages([...images])
        const image2 = await ConvertMultiple(event.target.files[0])
        convert.splice(k, 1, image2)
        setConvert([...convert])
    }

    const handleImageAdd = async (event) => {
        images.push({ file: event.target.files[0], index: images[images.length - 1].index + 1 })
        setImages([...images])
        const image2 = await ConvertMultiple(event.target.files[0])
        convert.push(image2)
        setConvert([...convert])
    }

    return (
        <>
            <Box>
                <h2 mt={4} style={{ margin: '25px 0 2px 0' }}>
                    ԸՆՏՐԵՔ ՆԿԱՐՆԵՐ
                </h2>
                <hr />
            </Box>
            <Box marginBottom={2}>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', }}>
                    {convert?.map((i, k) => (
                        <div key={k}>
                            <div style={{ border: '1px solid black', padding: 10, position: 'relative', marginBottom: 10 }} >
                                <div style={{ position: 'absolute', right: 4, top: 4, color: "black", cursor: 'pointer' }} onClick={() => handleImageDelete(k)}>❌</div>
                                <img src={i} width={150} height={150} alt="asd" />
                            </div>
                            <label htmlFor={`edit${k}`} >
                                <span className="editImage">Խմբագրել</span>
                                <input style={{ display: 'none' }} onChange={(e) => handleImageEdit(e, k)} id={`edit${k}`} multiple={false} type="file" />
                            </label>
                        </div>
                    ))}
                    {images?.length > 0 && <div style={{ height: 170, display: 'flex', alignItems: 'flex-end' }}><label htmlFor="add" >
                        <span className="addImage">Ավելացնել</span>
                        <input style={{ display: 'none' }} onChange={handleImageAdd} id="add" multiple={false} type="file" />
                    </label>
                    </div>}
                </div>
            </Box>

            {images?.length === 0 && <Box>
                <div style={{ height: 30, display: 'flex', alignItems: 'flex-end' }}><label htmlFor="add" >
                    <span className="addImage">Ավելացնել Նկարներ</span>
                    <input style={{ display: 'none' }} onChange={fileSelectedHandler} id="add" multiple type="file" />
                </label>
                </div>
            </Box>}
        </>
    );
}

export default AllImages;