import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Grid, Box, Typography } from '@material-ui/core';
import Close from '@material-ui/icons/Close';
import { theme } from './bdtheme';
import './App.css';
import './App.css';
import { ThemeProvider } from '@material-ui/core/styles';
import Navbar from './Navbar';

import DocViewer, { DocViewerRenderers } from "react-doc-viewer";

import FileViewer from 'react-file-viewer';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const menuItems = ['Dashboard', 'Applications', 'Incoming', 'Services'];

function App() {
  const docs = [
    {
      uri: require("./Dynamic_tabs.pdf")
    },
    {
      uri: require("./doc.pdf")
    },
    {
      uri: require("./photo.jpeg")
    },
    {
      uri: require("./Ppt_File.ppt")
    }
  ];
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <DocViewer pluginRenderers={DocViewerRenderers} documents={docs} />
      </div>
    </ThemeProvider>
  );
}

export default App;
