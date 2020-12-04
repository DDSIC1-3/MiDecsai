jQuery("#simulation")
  .on("click", ".s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Category_1" ]
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
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-Category_2" ]
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
  .on("mouseup", ".s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
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
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Paragraph_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32 span": {
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
    } else if(jFirer.is("#s-Paragraph_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33 span": {
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
    } else if(jFirer.is("#s-Paragraph_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34 span": {
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
    } else if(jFirer.is("#s-Paragraph_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35": {
                      "attributes": {
                        "font-size": "0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35 span": {
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
    }
  })
  .on("mousedown", ".s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
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
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
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
    } else if(jFirer.is("#s-Paragraph_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_32 span": {
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
    } else if(jFirer.is("#s-Paragraph_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_33 span": {
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
    } else if(jFirer.is("#s-Paragraph_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_34 span": {
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
    } else if(jFirer.is("#s-Paragraph_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35 > .backgroundLayer > .colorLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Paragraph_35 span": {
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
    }
  })
  .on("click", ".s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f .toggle", function(event, data) {
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
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_8": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_8 > .backgroundLayer > .colorLayer": {
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
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_9": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_9 > .backgroundLayer > .colorLayer": {
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
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_10": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_10 > .backgroundLayer > .colorLayer": {
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
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_11": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_11 > .backgroundLayer > .colorLayer": {
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
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_12": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_12 > .backgroundLayer > .colorLayer": {
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
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_13": {
                        "attributes": {
                          "font-size": "0pt"
                        }
                      }
                    },{
                      "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_13 > .backgroundLayer > .colorLayer": {
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
  .on("mouseenter dragenter", ".s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_4": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_4 > .backgroundLayer > .colorLayer": {
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
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_6": {
                      "attributes": {
                        "font-size": "0pt"
                      }
                    }
                  },{
                    "#s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f #s-Rectangle_6 > .backgroundLayer > .colorLayer": {
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
  .on("mouseleave dragleave", ".s-7056f199-7fd8-459f-9ce9-76f8c9f0cf2f .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_4")) {
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      jEvent.undoCases(jFirer);
    }
  });