import * as React from 'react';
import '../../../styles/index.less';
import SearchComponent from '../../SearchComponent/SearchComponent';

// Defining the interface.
export interface SpacerProps {spacerHeight: string; }

export default class ContentSpacer extends React.Component<SpacerProps> {

// Defining the default props.
public static defaultProps: Partial<SpacerProps> = {
    spacerHeight: '10%',

  };
// Declaring what is being rendered.
  render() {
    return (
        <div className='ct-spacer'>
            <SearchComponent personAmount={9} startDate={'0-0-2019'} endDate={'12-12-2018'} />
        </div>
    );
  }
}
