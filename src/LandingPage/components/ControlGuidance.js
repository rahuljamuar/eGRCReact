import React from "react";

function ControlGuidance() {
  return (
    <div>
      <div className="text-center font-medium">Additional Guidance Control</div>
      <div class="flex align-center justify-center p-4">
        <div class="box-border h-44 w-44 p-2 border-4 border-gray-400 bg-gray-200">
          <div className="flex-col">
            This control relates to inventory in transit between Unilever
            companies.
          </div>
        </div>
      </div>
      <div className="text-center font-medium">Attachment</div>
      <div class="flex align-center justify-center p-4">
        <div class="box-border h-44 w-44 p-2 border-4 border-gray-400 bg-gray-200">
          <div className="flex-col text-center">&#128206; Attachment</div>
        </div>
      </div>
    </div>
  );
}

export default ControlGuidance;
