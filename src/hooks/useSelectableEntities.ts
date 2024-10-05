import { useState } from "react";

interface EntityWithId {
  id: string;
}

function useSelectableEntities<T extends EntityWithId>(
  deleteService: (id: string) => Promise<void>,
  entities: T[],
  setEntities: React.Dispatch<React.SetStateAction<T[]>>
) {
  const [selectedEntities, setSelectedEntities] = useState<string[]>([]);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [entitiesToDelete, setEntitiesToDelete] = useState<string[]>([]);

  const handleCheckboxChange = (entityId: string) => {
    setSelectedEntities((prevSelected) =>
      prevSelected.includes(entityId)
        ? prevSelected.filter((id) => id !== entityId)
        : [...prevSelected, entityId]
    );
  };

  const handleSingleDelete = async (entityId: string) => {
    try {
      await deleteService(entityId);
      setEntities((prevEntities) =>
        prevEntities.filter((entity) => entity.id !== entityId)
      );
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  const handleDeleteSelectedEntities = async () => {
    try {
      await Promise.all(entitiesToDelete.map((id) => deleteService(id)));

      setEntities((prevEntities) =>
        prevEntities.filter((entity) => !entitiesToDelete.includes(entity.id))
      );

      resetSelectedEntities();
    } catch (error) {
      console.error("Error deleting entities:", error);
    }
  };

  const resetSelectedEntities = () => {
    setSelectedEntities([]);
    setEntitiesToDelete([]);
    setShowConfirmDelete(false);
  };

  const toggleDeleteConfirmation = () => {
    if (selectedEntities.length > 0) {
      setEntitiesToDelete(selectedEntities);
      setShowConfirmDelete(true);
    }
  };

  return {
    selectedEntities,
    handleCheckboxChange,
    handleSingleDelete,
    handleDeleteSelectedEntities,
    resetSelectedEntities,
    toggleDeleteConfirmation,
    showConfirmDelete,
    entitiesToDelete,
  };
}

export default useSelectableEntities;
