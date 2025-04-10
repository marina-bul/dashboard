import { useState } from "react";

export const useDashboardEditMode = () => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => setIsEditing(true);
  const cancelEditing = () => setIsEditing(false);
  const saveEditing = () => {
    // Тут можно добавить логику сохранения, если она понадобится
    setIsEditing(false);
  };

  return { isEditing, startEditing, cancelEditing, saveEditing };
};