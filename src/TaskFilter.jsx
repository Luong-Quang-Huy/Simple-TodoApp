

export default function TaskFilter({filterType, handleChooseTasksFilter}){

    return (
      <div className="radio-container">
        <label>
          <input
            className="form-radio"
            type="radio"
            name="tasks-filter"
            checked={filterType === "all"}
            value="all"
            onChange={handleChooseTasksFilter}
          />{" "}
          All
        </label>
        <label>
          <input
            className="form-radio"
            type="radio"
            name="tasks-filter"
            checked={filterType === "active"}
            value="active"
            onChange={handleChooseTasksFilter}
          />{" "}
          Active
        </label>
        <label>
          <input
            className="form-radio"
             type="radio"
            name="tasks-filter"
            checked={filterType === "complete"}
            value="complete"
            onChange={handleChooseTasksFilter}
          />{" "}
          Complete
        </label>
      </div>
    );
}