import { useState } from "react";

function useEntityManager<T>(
  deleteService: (id: string) => Promise<void>,
  initialEntities: T[]
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
    const confirmed = window.confirm(
      "Are you sure you want to delete selected items?"
    );
    if (confirmed) {
      try {
        await Promise.all(
          selectedEntities.map((entityId) => deleteService(entityId))
        );
        return entities.filter(
          (entity) => !selectedEntities.includes(entity.id)
        );
      } catch (error) {
        console.error("Error deleting selected items:", error);
        return entities;
      } finally {
        setSelectedEntities([]);
      }
    }
    return entities;
  };

  return {
    selectedEntities,
    handleCheckboxChange,
    handleDeleteSelectedEntities,
  };
}

export default useEntityManager;
