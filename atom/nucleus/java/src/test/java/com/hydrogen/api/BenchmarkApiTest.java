/*
 * Hydrogen Atom API
 * The Hydrogen Atom API
 *
 * OpenAPI spec version: 1.7.0
 * Contact: info@hydrogenplatform.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package com.hydrogen.api;

import com.hydrogen.model.Benchmark;
import com.hydrogen.model.DateDoubleVO;
import com.hydrogen.ApiException;
import org.threeten.bp.OffsetDateTime;
import com.hydrogen.model.PageBenchmark;
import java.util.UUID;
import org.junit.Test;
import org.junit.Ignore;

import java.util.List;

/**
 * API tests for BenchmarkApi
 */
@Ignore
public class BenchmarkApiTest {

    private final BenchmarkApi api = new BenchmarkApi();

    
    /**
     * Create a benchmark
     *
     * Create a new benchmark for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void createBenchmarkUsingPostTest() throws ApiException {
        Benchmark benchmark = null;
        Benchmark response = api.createBenchmarkUsingPost(benchmark);

        // TODO: test validations
    }
    
    /**
     * Delete a benchmark
     *
     * Permanently delete a benchmark.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void deleteBenchmarkUsingDeleteTest() throws ApiException {
        UUID benchmarkId = null;
        api.deleteBenchmarkUsingDelete(benchmarkId);

        // TODO: test validations
    }
    
    /**
     * List all benchmarks
     *
     * Get details for all benchmarks defined for your firm.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getBenchmarkAllUsingGetTest() throws ApiException {
        Boolean ascending = null;
        String filter = null;
        String orderBy = null;
        Integer page = null;
        Integer size = null;
        PageBenchmark response = api.getBenchmarkAllUsingGet(ascending, filter, orderBy, page, size);

        // TODO: test validations
    }
    
    /**
     * List all benchmark asset sizes
     *
     * Get a list of asset sizes by date for a benchmark.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getBenchmarkAssetSizeAllUsingGetTest() throws ApiException {
        UUID benchmarkId = null;
        OffsetDateTime endDate = null;
        String sortType = null;
        OffsetDateTime startDate = null;
        List<DateDoubleVO> response = api.getBenchmarkAssetSizeAllUsingGet(benchmarkId, endDate, sortType, startDate);

        // TODO: test validations
    }
    
    /**
     * Retrieve a benchmark
     *
     * Retrieve the information for a benchmark.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void getBenchmarkUsingGetTest() throws ApiException {
        UUID benchmarkId = null;
        Benchmark response = api.getBenchmarkUsingGet(benchmarkId);

        // TODO: test validations
    }
    
    /**
     * Update a benchmark
     *
     * Updated the information for a benchmark.
     *
     * @throws ApiException
     *          if the Api call fails
     */
    @Test
    public void updateBenchmarkUsingPutTest() throws ApiException {
        Benchmark benchmark = null;
        UUID benchmarkId = null;
        Benchmark response = api.updateBenchmarkUsingPut(benchmark, benchmarkId);

        // TODO: test validations
    }
    
}
