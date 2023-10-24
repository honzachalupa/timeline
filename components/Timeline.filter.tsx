import moment, { Moment } from "moment";
import React, { useEffect, useState } from "react";

export interface FilterData {
    dateFrom: Moment;
    dateTo: Moment;
    categories: {
        [key: string]: boolean;
    };
}

interface FilterProps {
    categories: string[];
    onChange: (filter: FilterData) => void;
}

export const Filter: React.FC<FilterProps> = ({ categories, onChange }) => {
    const defaultCategories: {
        [key: string]: boolean;
    } = {};

    categories.forEach((id) => {
        defaultCategories[id] = true;
    });

    console.log({ categories, defaultCategories });

    const [data, setData] = useState<FilterData>({
        dateFrom: moment("1950-01-01"),
        dateTo: moment(),
        categories: defaultCategories,
    });

    console.log(data);

    const handleChange = (id: string, type: string, e: any) => {
        /* setData(
            (prevState) =>
                parseDotObjectString.object({
                    ...prevState,
                    [id]:
                        type === "date"
                            ? moment(`${e.target.value}-01-01`)
                            : type === "checkbox"
                            ? e.target.checked
                            : e.target.value,
                }) as FilterData
        ); */
    };

    useEffect(() => {
        console.log(data);

        onChange(data);
    }, [data]);

    console.log(data.categories);

    return (
        <div>
            {/* <FormGroup row>
            <TextField
                label="Date from"
                defaultValue={data.dateFrom.year()}
                placeholder="Years"
                type="number"
                variant="standard"
                onChange={(e) => handleChange("dateFrom", "date", e)}
            />

            <TextField
                label="Date to"
                defaultValue={data.dateTo.year()}
                placeholder="Years"
                type="number"
                variant="standard"
                onChange={(e) => handleChange("dateTo", "date", e)}
            />

            {categories.map((id) => (
                <FormControlLabel
                    key={id}
                    label={id.toUpperCase()}
                    control={
                        <Checkbox
                            defaultChecked={data.categories[id]}
                            onClick={(e) =>
                                handleChange(`categories.${id}`, "checkbox", e)
                            }
                        />
                    }
                />
            ))}
        </FormGroup> */}
        </div>
    );
};
