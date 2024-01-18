export default function componentName({ project }) {
  return (
    <div className="col-md-4">
      <div className="card mb-3 shadow-sm">
        <div className="card-body">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="card-title">{project.name}</h5>
            <a
              href={`/projects/${project.id}`}
              className="btn btn-light btn-sm"
            >
              View
            </a>
          </div>
          <p className="small">
            Status: <strong>{project.status}</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
