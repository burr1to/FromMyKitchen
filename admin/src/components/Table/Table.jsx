import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = ({ recipe }) => {
  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell className='tableCell'>Product ID</TableCell>
            <TableCell className='tableCell'>Recipe</TableCell>
            <TableCell className='tableCell'>FoodType</TableCell>
            <TableCell className='tableCell'>Culture</TableCell>
            <TableCell className='tableCell'>Serving Size</TableCell>
            <TableCell className='tableCell'>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {recipe?.map((row, index) => (
            <TableRow key={index}>
              <TableCell className='tableCell'>{row._id}</TableCell>
              <TableCell className='tableCell'>
                <div className='cellWrapper'>
                  <img
                    src={`http://localhost:8800/uploads/${row.photo}`}
                    alt=''
                    className='image'
                  />
                  {row.name}
                </div>
              </TableCell>
              <TableCell className='tableCell'>{row.foodtype}</TableCell>
              <TableCell className='tableCell'>{row.culture}</TableCell>
              <TableCell className='tableCell'>{row.size}</TableCell>

              <TableCell className='tableCell'>
                <span className={`status Approved`}>Active</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
