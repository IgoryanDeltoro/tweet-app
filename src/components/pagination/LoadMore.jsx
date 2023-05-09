import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

const LoadMore = ({ handleLoadMore }) => {
  return (
    <Box textAlign={'center'} sx={{ margin: '30px 0 0 0' }}>
      <Button onClick={handleLoadMore} variant="contained">
        Load more
      </Button>
    </Box>
  );
};

LoadMore.propTypes = {
  handleLoadMore: PropTypes.func,
};

export default LoadMore;
