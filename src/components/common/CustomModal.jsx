import FaIconByKeyName from "../icons/FaIconByKeyName";
import PropTypes from "prop-types";

const CustomModal = ({
  modalId,
  title,
  children,
  hasAction,
  ActionComponent,
  closeRef,
}) => {
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal backdrop-blur-md" role="dialog">
        <div className="modal-box text-base-content ">
          <div className="flex justify-between sticky top-0 mb-4  backdrop-blur-md z-50">
            <h3 className="text-lg font-bold">{title}</h3>

            <label
              className="btn btn-sm btn-ghost btn-circle"
              ref={closeRef}
              htmlFor={modalId}
            >
              <FaIconByKeyName iconName="FaTimes" />
            </label>
          </div>

          <div className="modal-scroll">{children}</div>
        </div>

        <div className="modal-action">
          {hasAction && (
            <>
              <label
                htmlFor={modalId}
                className="btn btn-outline btn-sm rounded-btn"
              >
                Cancel
              </label>
              <label
                htmlFor={modalId}
                className="btn btn-primary btn-sm rounded-btn"
              >
                Submit
              </label>
            </>
          )}

          {ActionComponent}
        </div>
      </div>
    </div>
  );
};

CustomModal.propTypes = {
  modalId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  hasAction: PropTypes.bool,
  ActionComponent: PropTypes.node,
  closeRef: PropTypes.object,
};

export default CustomModal;
