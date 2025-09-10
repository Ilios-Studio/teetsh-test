import "@testing-library/jest-dom";

import type { IProgramRepository, Program } from "../../domain";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";

import React from "react";
import { createProgramQueries } from "../queries";

const mockPrograms: Program[] = [
  {
    id: 1,
    name: "Programme Test 1",
    shortDescription: "Description test 1",
    date: "2024-01-01",
    userId: "user-1",
    nbOfUseLanding: 0,
    nbOfUseInApp: 0,
    schoolyearId: "schoolyear-1",
    schoolId: "school-1",
    programmationId: "prog-1",
    columnWidth: 200,
    fontSize: "14px",
    view: "grid",
    invertedRowCol: false,
    niveau: "CE1",
    createdAt: "2024-01-01",
    updatedAt: "2024-01-01",
    publishedAt: "2024-01-01",
    onePageMatiere: null,
    slug: "programme-test-1",
    documentId: "doc-1",
    periodes: [],
    matieres: [],
  },
  {
    id: 2,
    name: "Programme Test 2",
    shortDescription: "Description test 2",
    date: "2024-01-02",
    userId: "user-2",
    nbOfUseLanding: 0,
    nbOfUseInApp: 0,
    schoolyearId: "schoolyear-2",
    schoolId: "school-2",
    programmationId: "prog-2",
    columnWidth: 200,
    fontSize: "14px",
    view: "grid",
    invertedRowCol: false,
    niveau: "CE2",
    createdAt: "2024-01-02",
    updatedAt: "2024-01-02",
    publishedAt: "2024-01-02",
    onePageMatiere: null,
    slug: "programme-test-2",
    documentId: "doc-2",
    periodes: [],
    matieres: [],
  },
];

const createMockRepository = (
  getPrograms = jest.fn(),
  getProgram = jest.fn()
): IProgramRepository => ({
  getPrograms,
  getProgram,
});

const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

const createWrapper = (queryClient: QueryClient) => {
  return ({ children }: { children: React.ReactNode }) =>
    React.createElement(QueryClientProvider, { client: queryClient }, children);
};

describe("Program Queries Integration Tests", () => {
  let queryClient: QueryClient;
  let mockRepository: IProgramRepository;

  beforeEach(() => {
    queryClient = createTestQueryClient();
    mockRepository = createMockRepository();
  });

  afterEach(() => {
    queryClient.clear();
    jest.clearAllMocks();
  });

  describe("usePrograms", () => {
    it("should fetch programs successfully", async () => {
      mockRepository.getPrograms = jest.fn().mockResolvedValue(mockPrograms);
      const queries = createProgramQueries(mockRepository);

      const { result } = renderHook(() => queries.usePrograms(), {
        wrapper: createWrapper(queryClient),
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(result.current.data).toEqual(mockPrograms);
      expect(mockRepository.getPrograms).toHaveBeenCalledTimes(1);
    });

    it("should handle loading state correctly", async () => {
      let resolvePromise: (value: Program[]) => void;
      const pendingPromise = new Promise<Program[]>((resolve) => {
        resolvePromise = resolve;
      });

      mockRepository.getPrograms = jest.fn().mockReturnValue(pendingPromise);
      const queries = createProgramQueries(mockRepository);

      const { result } = renderHook(() => queries.usePrograms(), {
        wrapper: createWrapper(queryClient),
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
      expect(result.current.data).toBeUndefined();

      resolvePromise!(mockPrograms);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual(mockPrograms);
    });

    it("should handle errors correctly", async () => {
      const errorMessage = "Failed to fetch programs";
      mockRepository.getPrograms = jest
        .fn()
        .mockRejectedValue(new Error(errorMessage));
      const queries = createProgramQueries(mockRepository);

      const { result } = renderHook(() => queries.usePrograms(), {
        wrapper: createWrapper(queryClient),
      });

      await waitFor(() => {
        expect(result.current.isError).toBe(true);
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect((result.current.error as Error).message).toBe(errorMessage);
      expect(result.current.data).toBeUndefined();
    });

    it("should use correct cache key", async () => {
      mockRepository.getPrograms = jest.fn().mockResolvedValue(mockPrograms);
      const queries = createProgramQueries(mockRepository);

      renderHook(() => queries.usePrograms(), {
        wrapper: createWrapper(queryClient),
      });

      await waitFor(() => {
        expect(queryClient.getQueryData(["progressions"])).toBeUndefined();
      });

      await waitFor(() => {
        expect(queryClient.getQueryData(["progressions"])).toEqual(
          mockPrograms
        );
      });
    });
  });

  describe("useProgram", () => {
    const programId = "doc-1";
    const singleProgram = mockPrograms[0];

    it("should fetch a single program successfully", async () => {
      mockRepository.getProgram = jest.fn().mockResolvedValue(singleProgram);
      const queries = createProgramQueries(mockRepository);

      const { result } = renderHook(() => queries.useProgram(programId), {
        wrapper: createWrapper(queryClient),
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.data).toBeUndefined();

      await waitFor(() => {
        expect(result.current.isSuccess).toBe(true);
      });

      expect(result.current.data).toEqual(singleProgram);
      expect(mockRepository.getProgram).toHaveBeenCalledWith(programId);
      expect(mockRepository.getProgram).toHaveBeenCalledTimes(1);
    });

    it("should handle loading state correctly", async () => {
      let resolvePromise: (value: Program) => void;
      const pendingPromise = new Promise<Program>((resolve) => {
        resolvePromise = resolve;
      });

      mockRepository.getProgram = jest.fn().mockReturnValue(pendingPromise);
      const queries = createProgramQueries(mockRepository);

      const { result } = renderHook(() => queries.useProgram(programId), {
        wrapper: createWrapper(queryClient),
      });

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(false);
      expect(result.current.data).toBeUndefined();

      resolvePromise!(singleProgram);

      await waitFor(() => {
        expect(result.current.isLoading).toBe(false);
      });

      expect(result.current.isSuccess).toBe(true);
      expect(result.current.data).toEqual(singleProgram);
    });

    it("should handle errors correctly", async () => {
      const errorMessage = "Failed to fetch program";
      mockRepository.getProgram = jest
        .fn()
        .mockRejectedValue(new Error(errorMessage));
      const queries = createProgramQueries(mockRepository);

      const { result } = renderHook(() => queries.useProgram(programId), {
        wrapper: createWrapper(queryClient),
      });

      await waitFor(() => {
        expect(result.current.isError).toBe(true);
      });

      expect(result.current.error).toBeInstanceOf(Error);
      expect((result.current.error as Error).message).toBe(errorMessage);
      expect(result.current.data).toBeUndefined();
    });

    it("should use correct cache key with program ID", async () => {
      mockRepository.getProgram = jest.fn().mockResolvedValue(singleProgram);
      const queries = createProgramQueries(mockRepository);

      renderHook(() => queries.useProgram(programId), {
        wrapper: createWrapper(queryClient),
      });

      await waitFor(() => {
        expect(queryClient.getQueryData(["progression", programId])).toEqual(
          singleProgram
        );
      });
    });

    it("should create separate cache entries for different program IDs", async () => {
      const programId2 = "doc-2";
      const singleProgram2 = mockPrograms[1];

      mockRepository.getProgram = jest.fn().mockImplementation((id) => {
        if (id === programId) return Promise.resolve(singleProgram);
        if (id === programId2) return Promise.resolve(singleProgram2);
        return Promise.reject(new Error("Program not found"));
      });

      const queries = createProgramQueries(mockRepository);

      // Render hooks for both programs
      const { result: result1 } = renderHook(
        () => queries.useProgram(programId),
        {
          wrapper: createWrapper(queryClient),
        }
      );

      const { result: result2 } = renderHook(
        () => queries.useProgram(programId2),
        {
          wrapper: createWrapper(queryClient),
        }
      );

      await waitFor(() => {
        expect(result1.current.isSuccess).toBe(true);
        expect(result2.current.isSuccess).toBe(true);
      });

      // Check that both programs are cached separately
      expect(queryClient.getQueryData(["progression", programId])).toEqual(
        singleProgram
      );
      expect(queryClient.getQueryData(["progression", programId2])).toEqual(
        singleProgram2
      );

      // Verify both calls were made
      expect(mockRepository.getProgram).toHaveBeenCalledWith(programId);
      expect(mockRepository.getProgram).toHaveBeenCalledWith(programId2);
      expect(mockRepository.getProgram).toHaveBeenCalledTimes(2);
    });
  });
});
