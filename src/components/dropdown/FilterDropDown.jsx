import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import ReplyIcon from '@mui/icons-material/Reply';
import { FilterBox, FilterButton, LinkFilter } from './FilterDropDown.styled';
import { useLocation } from 'react-router-dom/dist';
import { useRef } from 'react';
import { statusFilters } from 'redux/constants';
import { useDispatch } from 'react-redux';
import { setFilterStatus } from 'redux/filter/filterSlice';
import { useUsers } from 'hooks';

const FilterDropDown = () => {
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/');
  const dispatch = useDispatch();
  const { filterStatus } = useUsers();

  const handleOnClick = event => {
    dispatch(setFilterStatus(event.target.innerText));
  };
  console.log(backLinkRef.current);
  return (
    <FilterBox>
      <LinkFilter to={backLinkRef.current}>
        <ReplyIcon fontSize="large" />
      </LinkFilter>
      <FilterButton
        id="dropdown-item-button"
        title={filterStatus ? filterStatus : 'Filter'}
      >
        <Dropdown.ItemText>------Show------</Dropdown.ItemText>
        <Dropdown.Item onClick={event => handleOnClick(event)} as="button">
          {statusFilters.all}
        </Dropdown.Item>
        <Dropdown.Item onClick={event => handleOnClick(event)} as="button">
          {statusFilters.follow}
        </Dropdown.Item>
        <Dropdown.Item onClick={event => handleOnClick(event)} as="button">
          {statusFilters.followings}
        </Dropdown.Item>
      </FilterButton>
    </FilterBox>
  );
};

export default FilterDropDown;
