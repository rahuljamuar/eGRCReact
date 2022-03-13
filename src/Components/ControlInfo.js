import React, { useState } from "react";
import {
  Table,TableBody,TableCell,TableContainer,TableRow
} from "@material-ui/core";

export default function ControlInfo(props) {
  const [isLoaded, setisLoaded] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [openTab, setOpenTab] = useState(1);
  const [currentMapping, setCurrentMapping] = useState();
  
  const toggle = () => {
    setIsOpened((wasOpened) => !wasOpened);
    setisLoaded(true);
    if (!props.selectedMapping) {
      setCurrentMapping(props.mappingData[0]);
    } else {
      setCurrentMapping(props.selectedMapping);
    }
  };

  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
      <div className="tab-content tab-space">
        <div className={openTab === 1 ? "block" : "hidden"} id="link1">
          <div className="widget-content tab-content">
            <div id="tab1" className="tab-pane active">
              <div className="row-fluid">
                <div className="span12">
                  <div className="widget-box collapsible">
                    <div className="widget-title" onClick={toggle}>
                      <a href="#collapse1" data-toggle="collapse">
                        <span className="icon">
                          <i className="fa fa-arrow-right"></i>
                        </span>
                        <h5>Control-info</h5>
                      </a>
                    </div>
                    {isOpened && (
                      <div className="widget-content">
                        {(() => {
                          if (!isLoaded) {
                            return (
                              <div className="" style={{ textAlign: "center" }}>
                                Loading...
                              </div>
                            );
                          } else {
                            return (
                              <>
                                <div className="">
                                  {props.mappingData &&
                                    props.mappingData.length === 0 && (
                                      <div
                                        className=""
                                        style={{ textAlign: "center" }}
                                      >
                                        <h3
                                          style={{
                                            color: "#000",
                                          }}
                                        >
                                          No Data Available
                                        </h3>
                                      </div>
                                    )}

                                  {currentMapping && (
                                    
                                                    <TableContainer >
      <Table aria-label="customized table">
        <TableBody>
            <TableRow >
              <TableCell >
              Country:
              </TableCell>
              <TableCell >
              {currentMapping.country_name}
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell >
              Location:
              </TableCell>
              <TableCell >
              {currentMapping.country_name}
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell >
              Status:
              </TableCell>
              <TableCell >
              {currentMapping.status_id}
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell >
              Control Description:
              </TableCell>
              <TableCell >
              {currentMapping.control_description}
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell >
              Control Name:
              </TableCell>
              <TableCell >
              {currentMapping.control_name}
              </TableCell>
            </TableRow>
            <TableRow >
              <TableCell>
              Additional Control Guidance:
              </TableCell>
              <TableCell>
              {currentMapping.control_guidance}
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
                                    
                                    
                                  )}
                                </div>
                              </>
                            );
                          }
                        })()}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
