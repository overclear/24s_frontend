import { MaterialReactTableProps } from "material-react-table";

const optionTableDefault = (): MaterialReactTableProps => {
    return {
        data: [],
        columns: [],
        enableColumnOrdering: true,
        enableColumnResizing: true,
        enableFilters: false,
        enableGrouping: true,
        positionActionsColumn: "last",
        localization: {
            actions: "actions",
        },
    };
};

export default optionTableDefault;
