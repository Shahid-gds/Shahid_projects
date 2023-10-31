import gql from 'graphql-tag'
export const GET_ALL_DRIVERS = gql`
query GET_ALL_DRIVERS{
  allDrivers {
      driverId
      address {
        line1
        state
        line2
        country
        city
        zip
      }
      carrier {
        orgID
        joinedTime
      }
      muftarId
      created
      credentials {
        license
        licenseNumber
      }
      email
      fmcTokens
      fname
      lname
      loadAssignment {
        load
        isAvailable
      }
      ownerOperator
      phone
      photo
      truck {
        truckId
        image
        make
        model
        year
      }
 	 }
}
`

export const GET_ALL_LOADS = gql`
query GET_ALL_LOADS{
  allLoads {
    loadId
    status
    stage
    acceptedAt
    assigned
    driver
    confirmationNumber
    documents
    destinations {
      destinationId
      locationType
      timing {
        expected
        actual
        elapsed
      }
      contract {
        name
        email
        phone
      }
      notes
      status
      metadata {
        referenceNumber
        driverLoad
      }
      locationName
      coordinates {
        latitude
        longitude
      }
      address {
        line1
        state
        line2
        country
        city
        zip
      }
    }
    quote {
      ask
    }
    loadPdf
    totalWeight
    trailer
    trailerSize
    tempRange
      cargo {
        stockId
        status
        weight
        item
        count
      }
    timeCompleted
    party {
      partyId
      accessCode
      active
      email
      hasSigned
      role
      token
      itemxo
    }
    created
  }
}
`