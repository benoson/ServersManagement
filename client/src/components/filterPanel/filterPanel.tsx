import React, { ChangeEvent, useState} from 'react';
import Server from '../../models/Server';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './filterPanel.css';

export default function FilterPanel({filteredServers, filterServersInUI, allServers, changeActiveButtonStatus} : any) {

    const [dateRadioButtonState, setDateRadioButton] = useState(false);
    const [activeRadioButtonState, setActiveRadioButton] = useState(false);

    const onFilterClick = (event : ChangeEvent<HTMLInputElement>) => {
        changeActiveButtonStatus();
        const clickedFilterInput: HTMLInputElement = event.target as HTMLInputElement;
        const clickedFilterValue: string = clickedFilterInput.value as string;

        if (clickedFilterValue === "dateFilter") {
            filterByMostRecentDate();
            setDateRadioButton(true);
            setActiveRadioButton(false);
        }
        else if (clickedFilterValue === "activeFilter") {
            filterByActiveServers();
            setActiveRadioButton(true);
            setDateRadioButton(false);
        }
    }

    const filterByMostRecentDate = () => {
        const sortedServersByMostRecentDates: Server[] = allServers.sort((a: any, b: any) => {
            const dateA = a.serverCreationTime;
            const dateAYear = +dateA.split('/')[2];
            const dateAMonth = +dateA.split('/')[1];
            const dateADay = +dateA.split('/')[0];
            const creationDateA = dateAYear+"-"+dateAMonth+"-"+dateADay;
            const fullCreationDateA = new Date(creationDateA);
            let c = new Date(fullCreationDateA);

            const dateB = b.serverCreationTime;
            const dateBYear = +dateB.split('/')[2];
            const dateBMonth = +dateB.split('/')[1];
            const dateBDay = +dateB.split('/')[0];
            const creationdateB = dateBYear+"-"+dateBMonth+"-"+dateBDay;
            const fullCreationdateB = new Date(creationdateB);
            let d = new Date(fullCreationdateB);

            return d.getTime() - c.getTime()
        });
        
        filterServersInUI(sortedServersByMostRecentDates);
    }

    const filterByActiveServers = () => {
        const sortedServersByActive: Server[] = filteredServers.filter((server: Server) => server.serverOnlineStatus == true);
        filterServersInUI(sortedServersByActive);
    }

    
    return (
        <div className="filterSection">
            <div className="filterHeaderDiv">
                <h2>Filters</h2>
            </div>
            <div className="filterButtons">
                <FormControl component="fieldset">
                    <RadioGroup row aria-label="filter" name="filters" onChange={onFilterClick} >
                        <FormControlLabel value="dateFilter" checked={dateRadioButtonState} control={<Radio />} label="Most Recent" />
                        <FormControlLabel value="activeFilter" checked={activeRadioButtonState} control={<Radio />} label="Active Servers" />
                    </RadioGroup>
                </FormControl>
            </div>
        </div>
    )
}