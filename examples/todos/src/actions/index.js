export const fetchJson = (team, build, framework) => async (
  dispatch,
  getState
) => {
  try {
    let data = [];
    if (build === "1") {
      data = [...data, "1"];
    } else if (build === "2") {
      data = [...data, "2"];
    } else if (build === "3") {
      data = [...data, "3"];
    } else if (build === "4") {
      data = [...data, "4"];
    } else if (build === "5") {
      data = [...data, "5"];
    }

    dispatch({
      type: "FETCH_BUILD_RESULTS_SUCCESS",
      payload: { team, build, framework, resp: data }
    });

    console.log("current", getState().buildResults.data);
  } catch (error) {
    dispatch({
      type: "FETCH_BUILD_RESULTS_FAILURE"
    });
  }
};
