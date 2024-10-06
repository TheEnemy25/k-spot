import { useState } from "react";

interface EntityWithId {
  id: string;
}

function useEntitySelection<T extends EntityWithId>(
  deleteService: (id: string) => Promise<void>,
  entities: T[],
  setEntities: React.Dispatch<React.SetStateAction<T[]>>
) {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [showBulkDeleteConfirmation, setShowBulkDeleteConfirmation] =
    useState(false);
  const [itemsToDelete, setItemsToDelete] = useState<string[]>([]);

  const toggleItemSelection = (entityId: string) => {
    setSelectedItems((prev) =>
      prev.includes(entityId)
        ? prev.filter((id) => id !== entityId)
        : [...prev, entityId]
    );
  };

  const deleteSingleItem = async (entityId: string) => {
    try {
      await deleteService(entityId);
      setEntities((prevEntities) =>
        prevEntities.filter((entity) => entity.id !== entityId)
      );
    } catch (error) {
      console.error("Error deleting entity:", error);
    }
  };

  const deleteSelectedItems = async () => {
    try {
      await Promise.all(itemsToDelete.map((id) => deleteService(id)));
      setEntities((prevEntities) =>
        prevEntities.filter((entity) => !itemsToDelete.includes(entity.id))
      );
      resetSelections();
    } catch (error) {
      console.error("Error deleting entities:", error);
    }
  };

  const resetSelections = () => {
    setSelectedItems([]);
    setItemsToDelete([]);
    setShowBulkDeleteConfirmation(false);
  };

  const confirmDeleteSelected = () => {
    if (selectedItems.length > 0) {
      setItemsToDelete(selectedItems);
      setShowBulkDeleteConfirmation(true);
    }
  };

  return {
    selectedItems,
    toggleItemSelection,
    deleteSingleItem,
    deleteSelectedItems,
    resetSelections,
    confirmDeleteSelected,
    showBulkDeleteConfirmation,
    itemsToDelete,
  };
}

export default useEntitySelection;
