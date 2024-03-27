import styled from "@emotion/styled"
import { Box, Card, CardContent, CardHeader } from "@mui/material"

function Statistics(props){
  // console.log(" line 4 --" , props.data)
  return(
    <>
      <Card 
        sx={{overflow:"visible" , background:"transparent"}} 
        className="flex justify-center items-center"
      >
        <CardContent sx={{padding:"50px"}}>
          <Box >
            <CardHeader 
              title={`Statistics - ${props.month}`}
            />
            <CardContent>
              <CardBox>
                <p className="mb-2">Total Sale : {props.data.totalSaleAmount }</p>
                <p className="mb-2">Total sold item : {props.data.totalSoldItems }</p>
                <p className="mb-2">Total not sold item : {props.data.totalUnSoldItems }</p>
              </CardBox>
            </CardContent>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}


export default Statistics


const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor : "#fdce82",
  padding:"20px",
  borderRadius:"20px",
  width:"250px",
  marginBottom:"20px"
}));