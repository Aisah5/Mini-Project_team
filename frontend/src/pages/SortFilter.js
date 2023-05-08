import React, { useEffect, useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Item from "./Item"
import { useNavigate, Link,useParams } from 'react-router-dom';


function SortFilter() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [categories, setCategory] = useState([]);
  const [name, setName] = useState([]);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getCategory();
    getCategoryById();
  }, []);

  const getCategoryById = async () => {
    const response = await axios.get(`http://localhost:3001/category/${id}`);
    setName(response.data.name);
  };


  const getCategory = async () => {
    const response = await axios.get('http://localhost:3001/category');
    setCategory(response.data)
  }

  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return categories;
    }
    return categories.filter((Item) => Item.categories === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, categories]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  return (
    <div className='d-flex '>
      <Link to="" className='btn btn-white'></Link>
      <div>
        <label><strong>Filter Product</strong></label>
        <Form.Select aria-label="Default select example"
        name="category-list"
        id="category-list"
        onChange={handleCategoryChange}
        >
            <option value=""><bold>All</bold></option>
            <option value="1">Makanan</option>
            <option value="2">Minuman</option>
            <option value="3">Cemilan</option>
        </Form.Select>
    </div>
    <Link to="" className='btn btn-white'></Link>
    <div >
        <label><strong>Sort Product</strong></label>
        <Form.Select aria-label="Default select example">
            <option>Refresh</option>
            <option value="1">Name (asc)</option>
            <option value="2">Name (desc)</option>
            <option value="3">Price (asc)</option>
            <option value="4">Price (desc)</option>
        </Form.Select>
      </div>
      {/* <div className="sport-list">
        {filteredList.map((element, index) => (
          <Item {...element} key={index} />
        ))}
      </div> */}
    </div>
  )
}
   
export default SortFilter;
