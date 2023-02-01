import { Box } from "@mui/material"
import { zig_zagProps } from "./zig_zagProps"
import './zig_zag.css'


export const ZigZagBoxMui = ({ color, width, height, children, radius }: zig_zagProps ) => {
    return <>
      <Box
       sx={{ width: width,
       height: height,
       backgroundColor: color, 
       borderTopLeftRadius: radius, 
       borderTopRightRadius: radius }}>
       <div className='box'>{children}</div>
    </Box>
    </>

}