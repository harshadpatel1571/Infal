// import '@progress/kendo-theme-default/dist/all.css'
// import React, { useState, useEffect } from "react";
// import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
// import { Button } from "@progress/kendo-react-buttons";
// import { mapTree } from "@progress/kendo-react-treelist";
// import { clone } from '@progress/kendo-react-common';
// import DataContext from '../contexts/data-context';
// import Axios from "axios";
// import { toDataSourceRequestString, translateDataSourceResultGroups } from '@progress/kendo-data-query';


// export default function Account() {

//     const [data, setData] = useState([]);
//     const [itemBeforeEdit, setItemBeforeEdit] = useState({})
//     const [dataState, setDataState] = useState({ take: 5, skip: 0, group: [] })
//     const [total, setTotal] = useState(0);
//     const hasGroups = dataState.group && dataState.group.length;

//     useEffect(() => {
//         Axios.get("https://localhost:44460/employee/bindGrid", toDataSourceRequestString(dataState)).then((response) => {
//             let parsedDataNew = mapTree(response.data.data, 'items', (product) => {
//                 return product
//             })
//             parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
//             console.log(parsedDataNew);
//             setTotal(response.data.total)
//             setData([...parsedDataNew]);
//         });
//     }, [dataState])

//     const addRecord = () => {
//         console.log("Add Record");
//         let newRecord = {
//             Id: null,
//             EmpId: null,
//             Name: null,
//             EmailId: null,
//             MobileNo: null,
//             inEdit: true
//         }

//         let newData = [...data];
//         newData.unshift(newRecord);
//         setData(newData)
//     }

//     const handleItemChange = (event) => {
//         console.log("handle Item Change");
//         let newData = mapTree(data, 'items', item => {
//             if (event.dataItem.Id === item.Id) {
//                 item[event.field] = event.value;
//             }
//             return item;
//         })
//         setData(newData);
//     }

//     const enterEdit = (dataItem) => {
//         console.log(dataItem);
//         console.log("Edit Mode Call");
//         let newData = mapTree(data, "items", (item) => {
//             console.log(item);
//             dataItem.id === item.id ? item.inEdit = true : item.inEdit = false;
//             return item;
//         });

//         setItemBeforeEdit(clone(dataItem));
//         setData(newData);
//     }

//     const remove = (dataItem) => {
//         // We process the dataState to make it compatible with the server requirements.
//         const data = {
//             filter: toDataSourceRequestString({ filter: dataState.filter }).replace("filter=", ""),
//             sort: toDataSourceRequestString({ sort: dataState.sort }).replace("sort=", ""),
//             group: toDataSourceRequestString({ group: dataState.group }).replace("group=", ""),
//             take: dataState.take,
//             skip: dataState.skip
//         }
//         Axios.delete("https://localhost:44460/employee/delete", { data: { ...data, employee: dataItem } }).then(
//             (response) => {
//                 let parsedDataNew = mapTree(response.data.data, 'items', item => {
//                     item.firstOrderedOn = new Date(item.firstOrderedOn);
//                     return item;
//                 })
//                 parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
//                 setData(parsedDataNew);
//                 setTotal(response.data.total);
//             }
//         );
//     }

//     const add = (dataItem) => {
//         let headers = {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }
//         // We process the dataState to make it compatible with the server requirements.
//         const data = {
//             filter: toDataSourceRequestString({ filter: dataState.filter }).replace("filter=", ""),
//             sort: toDataSourceRequestString({ sort: dataState.sort }).replace("sort=", ""),
//             group: toDataSourceRequestString({ group: dataState.group }).replace("group=", ""),
//             take: dataState.take,
//             skip: dataState.skip
//         }

//         Axios.put("https://localhost:44460/employee/saveGridData", { ...data, employee: dataItem }, headers).then(
//             (response) => {
//                 let parsedDataNew = mapTree(response.data.data, 'items', item => {
//                     item.firstOrderedOn = new Date(item.firstOrderedOn);
//                     return item;
//                 })
//                 parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
//                 setData(parsedDataNew);
//                 setTotal(response.data.total);
//             }
//         );
//     }

//     const discard = () => {
//         let hasGroup = dataState.group.length > 0 ? true : false
//         let newData = []
//         hasGroup ? newData = data.filter(item => item.value !== undefined) : newData = data.filter(item => item.Id !== null)
//         setData(newData);
//     }

//     const update = (dataItem) => {
//         // We use this to remvoe time porting of the date based on the timezone. In this example we edit and filter only the date portion.
//         var myToday = new Date(dataItem.firstOrderedOn.getFullYear(), dataItem.firstOrderedOn.getMonth(), dataItem.firstOrderedOn.getDate(), 0, 0, 0);
//         let offsetMiliseconds = new Date().getTimezoneOffset() * 60000;
//         let dateWitnNotimeZone = new Date(
//             myToday.getTime() - offsetMiliseconds
//         );

//         dataItem.firstOrderedOn = dateWitnNotimeZone;

//         let headers = {
//             headers: {
//                 'Content-Type': 'application/json',
//             }
//         }

//         // We process the dataState to make it compatible with the server requirements.
//         const data = {
//             filter: toDataSourceRequestString({ filter: dataState.filter }).replace("filter=", ""),
//             sort: toDataSourceRequestString({ sort: dataState.sort }).replace("sort=", ""),
//             group: toDataSourceRequestString({ group: dataState.group }).replace("group=", ""),
//             take: dataState.take,
//             skip: dataState.skip
//         }
//         Axios.put("https://localhost:44460/products", { ...data, product: dataItem }, headers).then(
//             (response) => {
//                 let parsedDataNew = mapTree(response.data.data, 'items', item => {
//                     item.firstOrderedOn = new Date(item.firstOrderedOn);
//                     return item;
//                 })
//                 parsedDataNew = hasGroups ? translateDataSourceResultGroups(parsedDataNew) : parsedDataNew
//                 setData(parsedDataNew);
//             }
//         );
//     }

//     const cancel = () => {
//         let newData = mapTree(data, 'items', item => {
//             if (item.id === itemBeforeEdit.id) {
//                 item = itemBeforeEdit;
//                 item.inEdit = false;
//             }
//             return item;
//         })
//         setData(newData);
//     }

//     const handleDataStateChange = (event) => {
//         setDataState(event.dataState);
//     }

//     return (
//         <>
//             <DataContext.Provider
//                 value={{
//                     enterEdit: enterEdit,
//                     remove: remove,
//                     add: add,
//                     discard: discard,
//                     update: update,
//                     cancel: cancel
//                 }}
//             >
//                 <Grid
//                     data={data}
//                     editField="inEdit"
//                     onItemChange={handleItemChange}
//                     onDataStateChange={handleDataStateChange}
//                     {...dataState}
//                     pageable
//                     sortable
//                     filterable
//                     groupable
//                     total={total}
//                 >
//                     <GridToolbar>
//                         <div>
//                             <Button
//                                 title="Add new"
//                                 themeColor="primary"
//                                 onClick={addRecord}
//                             >
//                                 Add new
//                             </Button>
//                         </div>
//                     </GridToolbar>
//                     <GridColumn field='id' title='Id' width={50} editable={false} filterable={false} />
//                     <GridColumn field='empId' title='Employee Id' />
//                     <GridColumn field='name' title='Full Name' />
//                     <GridColumn field='emailId' title='Email Id' />
//                     <GridColumn field='mobileNo' title='Mobile No' />

//                     <GridColumn width="200px" cell={CommandGenrate} />
//                 </Grid>
//             </DataContext.Provider>
//         </>
//     )
// }

// function CommandGenrate(props) {
//     const currentContext = React.useContext(DataContext);

//     const { dataItem } = props;
//     const isNewItem = dataItem.Id === null;

//     const inEdit = dataItem.inEdit;

//     const handleAddUpdate = React.useCallback(() => {
//         if (isNewItem) {
//             currentContext.add(dataItem)
//         } else {
//             currentContext.update(dataItem)
//         }
//     }, [currentContext, dataItem, isNewItem])

//     const handleDiscardCancel = React.useCallback(() => {
//         isNewItem ? currentContext.discard(dataItem) : currentContext.cancel()
//     }, [currentContext, dataItem, isNewItem])

//     const handleEdit = React.useCallback(() => {
//         currentContext.enterEdit(dataItem)
//     }, [currentContext, dataItem])

//     const handleDelete = React.useCallback(() => {
//         window.confirm("Confirm deleting: " + dataItem.name) && currentContext.remove(dataItem)
//     }, [currentContext, dataItem])

//     if (props.rowType === 'groupHeader') return null;

//     return inEdit ?
//         (<td className="k-command-cell">
//             <Button onClick={handleAddUpdate}>
//                 {isNewItem ? "Add" : "Update"}
//             </Button>
//             <Button onClick={handleDiscardCancel}>
//                 {isNewItem ? "Discard" : "Cancel"}
//             </Button>
//         </td>) :
//         (<td className="k-command-cell">
//             <Button themeColor="primary" onClick={handleEdit}>
//                 Edit
//             </Button>
//             <Button onClick={handleDelete}>
//                 Remove
//             </Button>
//         </td>);
// };


import React from 'react'

export default function Account() {
  return (
    <div>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, sit! Mollitia qui sed nobis quisquam iure totam esse incidunt impedit libero repudiandae! Laboriosam repellendus vitae, repellat est possimus pariatur vero distinctio illum sequi accusamus, sint nesciunt, deserunt ipsam doloribus in. Nobis saepe delectus sed voluptatem soluta, quae sunt totam eaque!
    </div>
  )
}
