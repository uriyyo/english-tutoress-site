import Box from "@mui/material/Box";
import React from "react";

function PagePart({children, color, id}: { children: React.ReactNode, color: string, id: string }) {
    return (
        <Box id={id} sx={{backgroundColor: color, paddingTop: 10, paddingBottom: 5}}>
            {children}
        </Box>
    );
}

export default PagePart;
