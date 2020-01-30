import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: '20em',
      maxWidth: '25em'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }));

export default function DestinationManager() {
  const classes = useStyles();
  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);


  React.useEffect(() => {
    setLabelWidth(inputLabel.current.offsetWidth);
  }, []);

    return (
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel ref={inputLabel} htmlFor="originLabel">
          Destination
        </InputLabel>
    
        <Select
          native
          // value={state.value}
          // onChange={handleChange('value')}
          labelWidth={labelWidth}
          inputProps={{}}
        >
          <option value="" />
          <option value={10}>Destination placeholder 1</option>
          <option value={20}>Destination placeholder 2</option>
          <option value={30}>Destination placeholder 3</option>
        </Select>
      </FormControl>
    )
}
