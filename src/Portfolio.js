import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import Table from 'react-bootstrap/Table'

function Portfolio(){
 return(
  <div>
   <h1 className="portfolio">Portfolio</h1>
   <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>#</th>
      <th>Title Name</th>
      <th>Topic Name</th>
      <th>Published Link</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>React js</td>
      <td>API</td>
      <td>https://aryaanweb.000webhostapp.com/API/</td>
    </tr>
    <tr>
      <td>2</td>
      <td>HTML CSS </td>
      <td>Online learning Dummy Webpage</td>
      <td>https://aryaanweb.000webhostapp.com/Awesome_firm_task/</td>
    </tr>
    <tr>
      <td>3</td>
      <td>HTML CSS </td>
      <td>e - learning Dummy Webpage</td>
      <td>https://aryaanweb.000webhostapp.com/Task_Assignment/</td>
    </tr>
    <tr>
      <td>4</td>
      <td>HTML CSS JS </td>
      <td>Run video using HTML CSS</td>
      <td>https://aryaanweb.000webhostapp.com/VIDEO/</td>
    </tr>
    <tr>
      <td>5</td>
      <td>HTML CSS</td>
      <td>Christmas Eve</td>
      <td>https://aryaanweb.000webhostapp.com/Christmas/</td>
    </tr>
    <tr>
      <td>6</td>
      <td>HTML CSS JS</td>
      <td>Date and Time</td>
      <td>https://aryaanweb.000webhostapp.com/Time_date/</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Hitwicket Game</td>
      <td>Adobe Illustrator</td>
      <td>https://xd.adobe.com/view/9e30c23e-b5df-427e-acff-7da6e5b81501-cb63/</td>
    </tr>
    <tr>
      <td>8</td>
      <td>Bigbasket Ecommerce Page</td>
      <td>Ecommerce</td>
      <td>https://aryaanweb.000webhostapp.com/HostBookAssignment/login.html</td>
    </tr>
    <tr>
      <td>9</td>
      <td>Covid API Fetch</td>
      <td>PHP </td>
      <td>https://aryaanweb.000webhostapp.com/index.php#aboutid</td>
    </tr>
  </tbody>
</Table>
  </div>
  
 )
}

export default Portfolio;