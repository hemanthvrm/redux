import React from "react";
import { Collapse } from "antd";
import BackendCall from "./BackendCall";

const { Panel } = Collapse;

const Home = () => (
  <Collapse>
    <Panel header="stack" key="1">
      <Collapse>
        <Panel header="stack 1 nba" key="1">
          <BackendCall team="nba" build="1" framework="stack" />
        </Panel>
        <Panel header="stack 2 nba" key="2">
          <BackendCall team="nba" build="2" framework="stack" />
        </Panel>
        <Panel header="stack 3 nba" key="3">
          <BackendCall team="nba" build="3" framework="stack" />
        </Panel>
      </Collapse>
    </Panel>
    <Panel header="overflow" key="2">
      <Collapse>
        <Panel header="overflow 4 nfl" key="1">
          <BackendCall team="nfl" build="4" framework="overflow" />
        </Panel>
        <Panel header="overflow 5 nfl " key="2">
          <BackendCall team="nfl" build="5" framework="overflow" />
        </Panel>
        <Panel header="overflow 6 nfl" key="3">
          <BackendCall team="nfl" build="6" framework="overflow" />
        </Panel>
      </Collapse>
    </Panel>
  </Collapse>
);

export default Home;
