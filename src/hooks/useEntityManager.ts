import { useState } from "react";

function useEntityManager<T>(
  deleteService: (id: string) => Promise<void>,
  initialEntities: T[],
  onOpenConfirmDeleteModal: (selectedIds: string[]) => void // New callback
) {
  const [selectedEntities, setSelectedEntities] = useState<string[]>(
    initialEntities.map((entity) => entity.id)
  );

  const handleCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    entityId: string
  ) => {
    if (event.target.checked) {
      setSelectedEntities((prevSelected) => [...prevSelected, entityId]);
    } else {
      setSelectedEntities((prevSelected) =>
        prevSelected.filter((id) => id !== entityId)
      );
    }
  };

  const handleDeleteSelectedEntities = async (entities: T[]) => {
    // Open the custom confirmation modal instead of using window.confirm
    onOpenConfirmDeleteModal(selectedEntities);
  };

  return {
    selectedEntities,
    handleCheckboxChange,
    handleDeleteSelectedEntities,
  };
}

export default useEntityManager;
