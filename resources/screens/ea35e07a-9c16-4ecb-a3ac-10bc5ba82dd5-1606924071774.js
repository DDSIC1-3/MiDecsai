jQuery("#simulation")
  .on("click", ".s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Paragraph_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_1 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_2 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_3 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Paragraph_4 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#999999"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_7": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_7 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_8": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_9": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_4")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_10": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_5")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_11": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    } else if(jFirer.is("#s-Hotspot_6")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimChangeStyle",
                    "parameter": [ {
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_12": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_12 > .backgroundLayer > .colorLayer": {
                        "attributes": {
                          "background-color": "#CBCBCB"
                        }
                      }
                    } ],
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("mouseenter dragenter", ".s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_5": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_5 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#5E5E5E"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-ea35e07a-9c16-4ecb-a3ac-10bc5ba82dd5 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_5")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    }
  });