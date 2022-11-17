const API_PREFIX = process.env.API_PREFIX;

export const request = async (url, option = {}) => {
  try {
    const res = await fetch(`${API_PREFIX}${url}`, {
      ...option,
      headers: {
        "content-Type": "application/json",
        "x-username": "minwoo",
      },
    });

    if (res.ok) {
      return await res.json();
    }
    throw new Error("API 처리 오류");
  } catch (error) {
    throw new Error(error.message);
  }
};
